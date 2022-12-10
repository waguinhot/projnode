import { Router , Request , Response } from "express";
import { CalcularIdade, Homepage, Idade, Nome, Noticia } from "../controllers";

const router = Router();


router.get('/' , Homepage );

router.get('/noticia/:slug' , Noticia );

router.get('/nome' , Nome);

router.get('/idade' , Idade);

router.post('/idade/calcular' , CalcularIdade);

export default router;