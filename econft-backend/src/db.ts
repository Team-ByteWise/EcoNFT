import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add a User
export async function addUser(wallet: string, username?: string) {
    return await prisma.user.create({
        data: { wallet, username },
    });
}

// Find a User by Wallet
export async function findUserByWallet(wallet: string) {
    return await prisma.user.findUnique({
        where: { wallet },
        include: { transactions: true },
    });
}

// Store a Transaction
export async function storeTransaction(userId: string, txHash: string, amount: number, treeId?: string) {
    return await prisma.transaction.create({
        data: { userId, txHash, amount, treeId },
    });
}

// Get All Transactions for a User
export async function getUserTransactions(wallet: string) {
    const user = await prisma.user.findUnique({ where: { wallet }, include: { transactions: true } });
    return user?.transactions || [];
}
