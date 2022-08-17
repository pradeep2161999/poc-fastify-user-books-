import { FastifyReply, FastifyRequest } from "fastify";
import { updateLanguageServiceSourceFile } from "typescript";
import User from "../models/user";
import { add, listUser, updateUser ,removeUser,signin } from "../services/user.service";
import { UserAttributes } from "../types";
import { BookAttributes } from "../types";
import { UserParams } from "../types/user-controllers"
import { BookParams } from "../types/book-controllers";
import { isJsxAttributes } from "typescript";
import Users from "../models/user";
// import { user } from "pg/lib/defaults";

const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const service = require('../services/user.service')
function login(req: FastifyRequest, reply: FastifyReply){
const attrs = req.body as UserAttributes
  console.log("[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[",attrs);
  return signin(attrs)
  .then((token) => {
    //console.log("----------------------------",signin)  
    reply.header('Authorization', `Bearer ${token}`);

    reply.status(200).send({msg: [`Bearer ${token}`]});
  })
  .catch((err:Error) => {
    console.log("ninifriiri======>",err);
    reply.status(400).send(err);
  });

}


// function login(req: FastifyRequest, reply: FastifyReply) {
//   const attrs = req.body as UserAttributes
//   console.log("attrs==================>",attrs);
//   // const pass=attrs.password;
//   // console.log("pass--------------------",pass);
  
//   return signin(attrs)
//     .then(() => {
//       reply.status(200).send({ msg: ["login sucessfully"] });
//     })
//     .catch((err: Error) => {
//       console.log("lllllllllllllllllllllllllllllllllllllllllll",err);
//       reply.status(400).send(err);
//     });
// }




function create(req: FastifyRequest, reply: FastifyReply) {
  const attrs = req.body as UserAttributes
  const { id } = req.params as { id: number };

  // console.log("llllllllllllllllllllllllll",attrs);
  return add(attrs)
    .then((user) => {
      reply.status(200).send({msg:[" User created Successfully!!!"]});
    })
    .catch((err) => {
      reply.status(400).send(err);
    });
  }

function list(req: FastifyRequest, reply: FastifyReply) {
  return listUser()
    .then((user) => {
        // console.log("-----------",user);
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
        // console.log("========",err)
      reply.status(400).send(err);
    });

}

function update(req: FastifyRequest,reply: FastifyReply){
  const attrs = req.body as UserAttributes
  const params = req.params as UserParams
    return updateUser(attrs,params)
    .then((user) => {
        console.log("user=-------->",user);
        reply.status(200).send({msg: ["User Updated Succeessfully...."]});
    }).catch((err) => {
        reply.status(400).send(err);
        
    });
  }
function remove(req: FastifyRequest,reply: FastifyReply ){
  const attrs = req.body as UserAttributes
  const params = req.params as UserParams

    return removeUser(attrs,params)
    .then(() => {
        reply.status(200).send({msg:["User deleted sucessfully!!!!"]});
    }).catch((err: Error) => {
        reply.status(400).send(err);
    });
  }


export {create, list, update, remove,login};