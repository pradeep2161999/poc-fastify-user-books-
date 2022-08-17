import { sign } from "crypto";
import { FastifyRequest } from "fastify";
import { userInfo } from "os";
import { updateNamespaceExportDeclaration } from "typescript";
import db from "../models";
import Book from "../models/book";
import User from "../models/user";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function generateAccessToken(email: string) {
  // console.log("emaillllllllllll", email)
  // console.log("process.env.TOKEN_SECRET", process.env.TOKEN_SECRET)
  return jwt.sign({ email }, `${process.env.TOKEN_SECRET}`);
}
async function signin(attrs: any) {
  const userdetail = await User.findOne({ where: { email: attrs.email } });

  //console.log("attrs--------------------------",attrs);
  // console.log("user==================================================================>>>>>>>>>>>>", userdetail);
  const password = "password";
  //console.log("pass===============================================================>>>>>>>>>>>>>>>>>>>>>>>>>",pass);

  const hashingpassword = bcrypt.hashSync(attrs.password, 10);
  // console.log("hash--------------------------",hash);
  const verifiedpassword = bcrypt.compareSync(password, hashingpassword); // true

  // console.log("verifiedpassword---------------------------", verifiedpassword);

  if (!verifiedpassword) {
    throw new Error("Email or password is invalid");
  }
  const token = generateAccessToken(attrs.email);

  if (userdetail) {
    await userdetail.update({
      token: token,
    });
  }

  return token;
}

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

export { add, listUser, updateUser, removeUser, signin };
