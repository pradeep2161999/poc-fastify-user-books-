import { FastifyRequest } from "fastify";
import { updateNamespaceExportDeclaration } from "typescript";
import db from "../models";
import Book from "../models/book";
import Users from "../models/user";
import User from "../models/user";
const bcrypt = require('bcrypt')
async function signin(attrs:any) {
  const pass="password";
  console.log(pass);
  
  const hash = bcrypt.hashSync(attrs.password, 10);
  const checkPassword = bcrypt.compareSync(pass, hash); // true

//   const loginUser = await User.findOne({
//     where: { Email: attrs.Email, password: attrs.password },
//   });
//  console.log("loginUser---------------------------", checkPassword);

  if (!checkPassword) {
    throw new Error("Email or password is invalid");
  }
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

export { add, listUser, updateUser, removeUser,signin };
