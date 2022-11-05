import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authentication } from "../plugins/authenticate";
import fetch from 'node-fetch';

export async function authRoute(fastify: FastifyInstance) {
    fastify.get("/me", {
      onRequest: [authentication],
      }, async (request) => {
      return {user: request.user}
    });

    fastify.post("/users", async (request) => {
      const createUserBody = z.object({
        access_token: z.string(),
        
      })

      const {access_token} = createUserBody.parse(request.body);

      const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
        }
      })

      const userData = await userResponse.json();

      console.log("user", userData);

      const userInfoScheme = z.object({
        id: z.string(),
        email: z.string().email(),
        name: z.string(),
        picture: z.string().url(),
      })

      const userInfo = userInfoScheme.parse(userData);

      let user = await prisma.user.findUnique({
        where: {
          googleId: userInfo.id,
        }
      })

      if (!user) {
        user = await prisma.user.create({
          data: {
            googleId: userInfo.id,
            email: userInfo.email,
            avatarUrl: userInfo.picture,
            name: userInfo.name
          }
        })
      }

      const token = fastify.jwt.sign({
        name: user.name,
        avatar: user.avatarUrl,
      }, {
        sub: user.id,
        expiresIn: '7 days'
      });

      return { token };
    })
}