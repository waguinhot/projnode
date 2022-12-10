import {   Request , Response } from "express";


export const Homepage = (req: Request, res: Response) =>{ 

    res.render('pages/home' , {
        user: 'Fulano',
        lastname: 'Ciclano da Silva',
        age: 25
    });

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