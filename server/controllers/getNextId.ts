import { IUser, IEvents } from "../types";

export function getNextId(collection:(IUser|IEvents)[]):number {
    let nextId:number = 1;
    collection.forEach(item => {
        nextId = item.id >= nextId ? item.id + 1 : nextId;
    });
    return nextId;
}