# EcoNFT - Turn Your Trees into NFT's

EcoNFT enables individuals to combat climate change through blockchain-powered tree planting. By purchasing NFTs, users directly fund real-world tree plantations via an API. Track your impact, own unique digital assets, and contribute to a greener future! 🌍🌱

## Tech Stack

**Backend**

  - Framework: ExpressJS (TypeScript)
  - Database: MongoDB
  - API Integration: Tree Nation API (for fetching tree-related information)

**Frontend**

  - Framework: Next.js (TypeScript)

**Blockchain**

- HardHat
- Soldity

## Features

  - User Dashboard: Users can track their tree-planting contributions, and global rankings.
  - Plant Trees: User can plant trees from our site using cryptocurrency and in return they will get an NFT with the tree details.
  - Leaderboard: Users can track their ranks based on the number of trees planted and the NFTs they have got.
  - Environmental Contribution: The hunger of the users to get the top place in the leaderboard and maintain their position will help save the environment significantly.

## Getting Started

**Prerequisites**

  - Node.js (v16 or later)
  - MongoDB

### Setup

#### Backend Setup

```shell
cd econft-backend
pnpm install
cp .env.example .env  # Configure your environment variables
pnpx prisma generate # Generate the Prisma stuffs
pnpm run dev  # Start the backend server
```

#### Frontend Setup

```shell
cd econft-frontend
pnpm install
pnpm run dev  # Start the Next.js development server
```



