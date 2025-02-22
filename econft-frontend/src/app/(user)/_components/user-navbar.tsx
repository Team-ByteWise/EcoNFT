import Link from "next/link"
import { Home, User, Trophy, Upload, Sun, Moon } from "lucide-react"
import { useTheme } from "@/app/context/ThemeContext" 
import { Button } from "@/components/ui/button"

export  default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <ul className="flex justify-around py-2 md:py-4">
          <li>
            <Link
              href="/"
              className="flex flex-col md:flex-row items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <Home size={24} className="md:mr-2" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="flex flex-col md:flex-row items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <User size={24} className="md:mr-2" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/leaderboard"
              className="flex flex-col md:flex-row items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <Trophy size={24} className="md:mr-2" />
              <span>Leaderboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/upload"
              className="flex flex-col md:flex-row items-center text-sm text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <Upload size={24} className="md:mr-2" />
              <span>Upload</span>
            </Link>
          </li>
          <li className="hidden md:block">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

