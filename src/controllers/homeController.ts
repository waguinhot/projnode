import {   Request , Response } from "express";

import { Product } from '../models/Product';
import { User } from "../models/User";

export const Homepage = async (req: Request, res: Response) =>{ 

    let users = await User.findAll();

    res.render('pages/home' , {users});

}

export const Noticia = (req: Request, res: Response) => { 
    let noticia: string = req.params.slug;
    res.send(noticia);

}

export const Nome = (req: Request , res: Response) =>{

    let nome: string = req.query.nome as string;

    res.render('pages/name' ,{ nome });
} 

export const Idade = (req: Request , res: Response) =>{

    res.render('pages/idade');
}

export const CalcularIdade = (req: Request , res: Response) =>{

    let idade: number = 0;
    let mostrarIdade: boolean = false;
    if(req.body.ano)
    {
        let anoNascimento = parseInt(req.body.ano as string);
        let anoAtual = new Date().getUTCFullYear();

        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    

    res.render('pages/idade' ,{ idade , mostrarIdade });
}