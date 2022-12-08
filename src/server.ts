import express,{Request , Response} from 'express';
import path from 'path';
import mainRoutes from './routes';

const server = express();

server.use('/static',express.static(path.join(__dirname,'../public')));

server.use(mainRoutes);


server.use((req: Request , res: Response)=>{
    res.status(404).send('Página não encontrada!');
})


server.listen(3100);