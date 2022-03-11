
## Bibliotecas necessarias e Configurações basicas
1° Iniciando projeto com npm-init;
2° Instalando as bibliotecas Basicas para rodar o projeto.
 -npm install dotenv express mysql2 sequelize validator cors
2.2° Instalando os types
 -npm install -D @types/express @types/node @types/sequelize @types/validator @types/cors
3.1° Iniciando typescript caso for usar usando tsc --init
3.2° Entrar em tsconfig e editar 3 campos.("rootDir": "./src","moduleResolution": "node","outDir": "./dist", )
4° Criando variavel de ambiente ".end" e adicionando uma porta(PORT=4000);
5° Configurando um script no package.json para startar o projeto.
  "start-dev":"nodemon -e ts,json src/server.ts"
obs: necessario ter o nodemoon ts-node instalado globalmente.
6° Arquivo basico de servidor

## Arquivo basico de servidor
import express,{Request,Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cors from 'cors

dotenv.config();
const server = express();
server.use(cors);

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended:true}))

server.use((req:Request,res:Response)=>{
    res.status(404);
    res.json({error: 'Endpoint nao encontrado'})
})

server.listen(process.env.PORT,()=>{
    console.log("online")
});

## Configuração cors
### Cors com a configuração padrão.
`O cors sem nenhum parametro dentro de () libera acesso a todos os sites que tentarem fazer requisição a api`
import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

### Cors com permissão a dominio especifico
`No caso do cors com parametros é possivel especificar quais sites poderam acessar aquela api e tambem possivel permitir os tipos de requisição`
const server = express();
server.use(cors({
    origin: 'https://uol.com',
    methods: ['GET','POST']
}));

## Estrutura de Rotas
 A pasta routes recebe a definição de rotas e as funçoes do controles para controlar o funcionamento das rotas.

### Pasta Routes
import { Router } from "express";
import * as ApiController from '../controllers/apiController'

const router = Router();

    router.get('/ping',ApiController.ping);

export default router;
### Pasta Controllers
import {Request,Response} from "express";

export const ping = (req:Request,res:Response)=>{
    res.json({pong: true});
};

## Pasta Model
Define a estrutura de uma informção exemplo modelo objeto ou tabela de database.

## Pasta Services
Define as funçoes do controler de maneira individual

## Configurando database
 Na pasta instance criar um arquivo para definir a database, e um arquivo para instanciar a database no sequelize.

