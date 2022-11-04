import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()  
async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Dana",
      email: "dana@dana.com",
      avatarUrl: "https://avatars.githubusercontent.com/u/12786813?v=4",

    }
  })

  const pool = await prisma.pool.create({
    data: {
      title: 'Example Pool',
      code: '123',
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id
        }
      }
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-02T12:49:27.631Z',
      firstTeamCountryCode: 'DE',
      secondTeamCountryCode: 'BR',
    }
  })

  await prisma.game.create({
    data: {
      date: '2022-11-03T12:49:27.631Z',
      firstTeamCountryCode: 'BR',
      secondTeamCountryCode: 'AR',

      guesses: {
        create: {
          firstTeamPoints: 1,
          secondTeamPoints: 2,
          createdAt: '2022-11-01T12:49:27.631Z',
          
          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id
              }
            }
          }
        }
      }
    }
  })

}

main();