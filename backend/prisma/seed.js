import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

dotenv.config()
const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('testpass123', 10)
  
  const testUser = await prisma.user.create({
    data: {
      email: 'test@example.com',
      passwordHash: hashedPassword,
      firstName: 'Test',
      lastName: 'User',
      membershipTier: 'FREE'
    }
  })
  
  console.log('Created test user:', testUser)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
