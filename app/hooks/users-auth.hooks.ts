import db from "../models";
import User from "../models/user";
import bookRoutes from "../routes/books/books.routes";
import { FastifyInstance,FastifyReply, FastifyRequest } from "fastify";
import { UserAttributes, UserInstance } from "../types";
import { EmptyResultError, STRING, UnknownConstraintError } from "sequelize";
import { request } from "http";
import { stringify } from "querystring";
const { verify } = require("jsonwebtoken");
const dotenv = require("dotenv");
 const JWT_SECRET_KEY = process.env.TOKEN_SECRET || "";
// const JWT_SECRET_KEY = process.env.TOKEN_SECRET;
console.log("===============================", JWT_SECRET_KEY);

function getHeaderToken(headers: any) {
  const bearerHeader = headers.authorization;
  const bearer = bearerHeader ? bearerHeader.split(" ") : [];
  const bearerToken = bearer[1];

  return bearerToken;
}

function verifyToken(token: string, JWT_SECRET_KEY: string) {
  return new Promise((resolve, reject) => {
    console.log("-----------------------------", JWT_SECRET_KEY);
    verify(token, JWT_SECRET_KEY, (err: any, decoded: any) => {
      console.log("error is", err);
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}

const userAuthenticate = (fastify: FastifyInstance) => {
  fastify.decorateRequest("currentUser", null);
  fastify.addHook(
    "preHandler",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const token = getHeaderToken(request.headers);
      //console.log("token----------------------------->", token);
      if (!token) {
        const error = {
          error: ["You need to sign-in to access this page"],
        };
        reply.status(401).send(error);
      } else {
        try {
          const userAttrs: any = (await verifyToken(
            token,
            JWT_SECRET_KEY
          )) as UserAttributes;
          // const user: any = await findUseByEmail(userAttrs);
          const user = await User.findOne({
            where: {
              email: userAttrs.email,
            }
          })
          //console.log("userAttrs------------------", userAttrs.Email);
          console.log("User is-----------------------------", user);
          console.log("User token is", token);
          //console.log("---------------", user["Name"]);
          //console.log("user-----------------------", user);
          console.log("Check the boolean value", userAttrs.token === token);
          console.log("------------------------------------", user);
          if (user && user?.token === token) {
            //console.log("=====>>>>>");
            // request[currentUser] = user;
            request.currentUser = user;
            reply.header("Authorization", `Bearer ${token}`);
          } else {
            reply.status(400).send({
              error: ["session has expired"],
            });
          }
        } catch (error) {
          console.log("error", error);
          reply.status(400).send({
            error: ["Access Denied"],
          });
        }
      }
    }
  );
};

// async function findUseByEmail(userAttrs: any) {
//   const user = await User.findOne({
//     where: {
//       email: userAttrs.email,
//     },
//   });
//   if (!user) {
//     throw new EmptyResultError("User not found");
//   }
//   return user;
// }

module.exports = userAuthenticate;
