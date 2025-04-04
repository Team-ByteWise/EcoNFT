import React, { useRef, useEffect, useState } from 'react';

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Simple pixel class for the hover effect
class EcoPixel {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  ctx: CanvasRenderingContext2D;
  speed: number;
  active: boolean;
  
  constructor(
    x: number, 
    y: number, 
    ctx: CanvasRenderingContext2D, 
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.maxSize = Math.random() * 2 + 1; // Random size between 1-3
    this.color = color;
    this.ctx = ctx;
    this.speed = Math.random() * 0.1 + 0.05;
    this.active = false;
  }
  
  draw() {
    if (this.size <= 0) return;
    
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
  }
  
  appear() {
    if (this.size < this.maxSize) {
      this.size += this.speed;
    }
    this.active = true;
    this.draw();
  }
  
  disappear() {
    if (this.size > 0) {
      this.size -= this.speed;
    } else {
      this.active = false;
    }
    this.draw();
  }
}

const StepCard = ({ number, icon, title, description }: StepCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pixelsRef = useRef<EcoPixel[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  // Initialize pixels
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear existing pixels
    pixelsRef.current = [];
    
    // Create fewer pixels with larger gaps
    const gap = 20; // Larger gap for fewer pixels
    const colors = ['#10b981', '#059669', '#047857']; // Green theme colors
    
    for (let x = 0; x < rect.width; x += gap) {
      for (let y = 0; y < rect.height; y += gap) {
        // Add some randomness to pixel positions
        const offsetX = (Math.random() - 0.5) * gap * 0.5;
        const offsetY = (Math.random() - 0.5) * gap * 0.5;
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        pixelsRef.current.push(
          new EcoPixel(x + offsetX, y + offsetY, ctx, color)
        );
      }
    }
    
    // Handle resize
    const observer = new ResizeObserver(() => {
      if (!canvas || !container) return;
      
      const newRect = container.getBoundingClientRect();
      canvas.width = newRect.width;
      canvas.height = newRect.height;
      
      // Reinitialize pixels on resize
      pixelsRef.current = [];
      for (let x = 0; x < newRect.width; x += gap) {
        for (let y = 0; y < newRect.height; y += gap) {
          const offsetX = (Math.random() - 0.5) * gap * 0.5;
          const offsetY = (Math.random() - 0.5) * gap * 0.5;
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          pixelsRef.current.push(
            new EcoPixel(x + offsetX, y + offsetY, ctx, color)
          );
        }
      }
    });
    
    observer.observe(container);
    
    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let allInactive = true;
      
      pixelsRef.current.forEach(pixel => {
        if (isHovered) {
          pixel.appear();
          allInactive = false;
        } else {
          pixel.disappear();
          if (pixel.active) allInactive = false;
        }
      });
      
      if (!allInactive) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    if (isHovered || pixelsRef.current.some(p => p.active)) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);
  
  return (
    <div 
      ref={containerRef}
      className="bg-green-900/40 backdrop-blur-sm border border-green-800/50 rounded-lg p-6 h-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:border-green-700/50 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-4 text-green-500">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-950/70 mr-3">
            {icon}
          </div>
          <span className="text-sm font-mono text-green-500">{number}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white">
          {title}
        </h3>
        
        <p className="text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;