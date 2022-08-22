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