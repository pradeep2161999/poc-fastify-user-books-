import { sign } from "crypto";
import { FastifyRequest } from "fastify";
import { userInfo } from "os";
import { updateNamespaceExportDeclaration } from "typescript";
import db from "../models";
import Book from "../models/book";
import Users from "../models/user";
import User from "../models/user";

import { userLoginRouterOpts } from "../routes/users/users-login-router.opts";
import { userUpdateRouterOpts } from "../routes/users/users-update.router.opts";
import userRoutes from "../routes/users/users.routes";
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
function generateAccessToken(email:string) {
  // console.log("emaillllllllllll", email)
  // console.log("process.env.TOKEN_SECRET", process.env.TOKEN_SECRET)
  return jwt.sign({ email }, `${process.env.TOKEN_SECRET}`);
}
async function signin(attrs:any) {   
  const user= await User.findOne({ where: { email: attrs.email } });

  //console.log("attrs--------------------------",attrs);
  console.log("user---------------------------+++=+++++++++=",user);
  const pass = "password";
  //console.log("pass-----------------------------",pass);

  const hash = bcrypt.hashSync(attrs.password, 10);
  // console.log("hash--------------------------",hash);
  const checkPassword = bcrypt.compareSync(pass, hash); // true

  // console.log("checkPassword---------------------------", checkPassword);

  if (!checkPassword) {
    throw new Error("Email or password is invalid");
  }
  const token = generateAccessToken(attrs.email);
    

  await user?.update
  ({
    token: token,
   });

  return token;
}







// async function signin(attrs:any) {
//   const pass="password";
//   console.log(pass);
  
//   const hash = bcrypt.hashSync(attrs.password, 10);
//   const checkPassword = bcrypt.compareSync(pass, hash); // true

// //   const loginUser = await User.findOne({
// //     where: { Email: attrs.Email, password: attrs.password },
// //   });
// //  console.log("loginUser---------------------------", checkPassword);

//   if (!checkPassword) {
//     throw new Error("Email or password is invalid");
//   }
//  }

 function add(req: any) {
  return User.create({
    name: req.name,
    email: req.email,
    role: req.role,
    password: req.password,
  });
}







// function add(req: any,res:any){
//   const { id } = req.params
// const UserData =  id.belongsTo(User)
//   if(UserData && UserData.role === "admin"){
//     return User.create({
//       name: req.name,
//       email: req.email,
//       role: req.role,
//     })
//     .then((user) => res.status(201).send(user))
//     .catch((error) => res.status(400).send(error));
// } else {
//   res
//     .status(422)
//     .send({ msg: ["You are not allowed to perform this action"] });
// }
// }

//     });
//   }
//   else{
//     return "agent cannot be created"
//   }
// }

function listUser() {
  return User.findAll({
    include: [
      {
        model: Book,
        as: "book",
      },
    ],
  });
}
function updateUser(attrs: any, params: any) {
  return User.update(attrs, {
    where: {
      id: params.id,
    },
  });
}
function removeUser(attrs: any, params: any) {
  return User.destroy({
    where: {
      id: params.id,
    },
  });
}

export { add, listUser, updateUser, removeUser,signin };
