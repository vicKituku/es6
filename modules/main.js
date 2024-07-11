import User, { printName as printUserName, printAge } from "./user.js";

const user = new User("Victor", 32);
printUserName(user);
printAge(user);
