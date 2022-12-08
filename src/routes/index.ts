import { Router , Request , Response } from "express";

const router = Router();


router.get('/' , (req: Request, res: Response) =>{ 

    res.render('home');
});

router.get('/noticia/:slug' , (req: Request, res: Response) =>{ 

    let noticia: string = req.params.slug;
    res.send(noticia);
})

export default router;