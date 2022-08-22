// import { sign } from "crypto";
// import { FastifyRequest } from "fastify";
// import { userInfo } from "os";
// import { updateNamespaceExportDeclaration } from "typescript";
// import db from "../models";
// import Book from "../models/book";
// import User from "../models/user";
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// // function generateAccessToken(email: string) {
// //   // console.log("emaillllllllllll", email)
// //   // console.log("process.env.TOKEN_SECRET", process.env.TOKEN_SECRET)
// //   return jwt.sign({ email }, `${process.env.TOKEN_SECRET}`);
// // }
import Book from "../models/book";
import Users from "../models/user";
import { UserAttributes } from "../types";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
function generateToken(email: string) {
  console.log("process.env.TOKEN_SECRET", process.env.TOKEN_SECRET);
  const token = jwt.sign({ email }, `${process.env.TOKEN_SECRET}`);
  return token;
}
async function signin(attrs: any) {
  const user: any = await Users.findOne({ where: { email: attrs.email } });
  const checkPassword = bcrypt.compareSync(attrs.password, user.password);
  console.log("comapare sync password", checkPassword);
  if (!checkPassword) {
    throw new Error("Invalid Email or Password!!");
  }
  const token = generateToken(attrs.email);
  await user.update({
    token: token,
  });
  return token;
}
function add(attrs: any) {
  return Users.create(attrs);
}
function listuser() {
  return Users.findAll({
    include: [
      {
        model: Book,
        as: "book",
      },
    ],
    order: ["id"],
  });
}
async function updateuser(attrs: any, params: any) {
  const user = await getuser(params.id);
  user?.update(attrs);
}
async function getuser(id: any) {
  return Users.findByPk(id);
}
async function remove(attrs: any, id: any) {
  const user = await getuser(id);
  user?.destroy();
}
export { signin, add, listuser, updateuser, remove };

// function list() {
//   return User
//       .findAll()
// }
// async function login(attrs:any) {

//   const user = await User.findOne({ where:{email: attrs.email }});

//   if (!user) {
//       throw new Error("Invalid email or password");
//   }

//   validatePassword(user, attrs.password);

//   const accessToken = generateAccessToken(attrs.email);

//   await user.update({
//       access_token: accessToken
//   })

//   return accessToken;
// }

// function validatePassword(user, password) {
//   const valid = bcrypt.compareSync(password, user.encrypted_password);
//   if (!valid) {
//       throw Error("Invalid email or password")
//   }
// }

// function generateAccessToken(email) {
//   // console.log("-----------TOKEN_SECRET-------", process.env.TOKEN_SECRET)
//   return jwt.sign({ email }, `${process.env.TOKEN_SECRET}`, { expiresIn: 18000, });
// }

// // async function signin(attrs: any) {
// //   const userdetail = await User.findOne({ where: { email: attrs.email } });

// //   //console.log("attrs--------------------------",attrs);
// //   // console.log("user==================================================================>>>>>>>>>>>>", userdetail);
// //   const password = "password";
// //   //console.log("pass===============================================================>>>>>>>>>>>>>>>>>>>>>>>>>",pass);

// //   const hashingpassword = bcrypt.hashSync(attrs.password, 10);
// //   // console.log("hash--------------------------",hash);
// //   const verifiedpassword = bcrypt.compareSync(password, hashingpassword); // true

// //   // console.log("verifiedpassword---------------------------", verifiedpassword);

// //   if (!verifiedpassword) {
// //     throw new Error("Email or password is invalid");
// //   }
// //   const token = generateAccessToken(attrs.email);

// //   if (userdetail) {
// //     await userdetail.update({
// //       token: token,
// //     });
// //   }

// //   return token;
// // }

// // function add(req: any) {
// //   return User.create({
// //     name: req.name,
// //     email: req.email,
// //     role: req.role,
// //     password: req.password,
// //   });
// // }

// // function add(req: any,res:any){
// //   const { id } = req.params
// // const UserData =  id.belongsTo(User)
// //   if(UserData && UserData.role === "admin"){
// //     return User.create({
// //       name: req.name,
// //       email: req.email,
// //       role: req.role,
// //     })
// //     .then((user) => res.status(201).send(user))
// //     .catch((error) => res.status(400).send(error));
// // } else {
// //   res
// //     .status(422)
// //     .send({ msg: ["You are not allowed to perform this action"] });
// // }
// // }

// //     });
// //   }
// //   else{
// //     return "agent cannot be created"
// //   }
// // }

// // function listUser() {
// //   return User.findAll({
// //     include: [
// //       {
// //         model: Book,
// //         as: "book",
// //       },
// //     ],
// //   });
// // }
// // function updateUser(attrs: any, params: any) {
// //   return User.update(attrs, {
// //     where: {
// //       id: params.id,
// //     },
// //   });
// // }
// // function removeUser(attrs: any, params: any) {
// //   return User.destroy({
// //     where: {
// //       id: params.id,
// //     },
// //   });
// // }

// // export { add, listUser, updateUser, removeUser, signin };
// export {
//   login,list
// }
