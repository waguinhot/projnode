import {   Request , Response } from "express";

import { User } from "../models/User";


export const NewUser = async  (req: Request , res: Response) =>{

    let name = req.body.name;
    let age = req.body.age;

    await User.create({
        name: name,
        age: age
    });
    // res.render('pages/home' ,);
    res.redirect("/");
}