import { Request, Response } from "express";
import { getNextId } from "./getNextId";
import users from "../database/users";
import { IUser } from "../types";

let nextId = getNextId(users);
export function updateUser(req:Request, res:Response) {
    let updateUser: {firstName:string,lastName:string} = req.body;

    let foundUser: IUser = users.find(user => user.id === parseInt(req.params.id));
    if(foundUser) {
        foundUser.firstName = updateUser.firstName;
        foundUser.lastName = updateUser.lastName;
    }
    res.send(foundUser);
    res.end();
}

export function createUser(req:Request, res:Response) {
    let newUser: IUser = req.body;
    newUser.id = nextId;
    nextId++;
    users.push(newUser);
    res.send(newUser);
    res.end();
}

export function getUsers(req:Request, res:Response) {
    res.send(users);
    res.end();
}