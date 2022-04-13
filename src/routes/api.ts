import { Router } from "express";
import * as ApiController from '../controllers/apiController';
import * as UserController from '../controllers/userController';
import * as ProdutoController from './../controllers/produtoController';

const router = Router();

router.get('/ping',ApiController.ping);
router.post('/login',UserController.login);
router.post('/cadastro',ProdutoController.cadastrarProduto);
router.get('/listall',ProdutoController.getAllProducts);
router.post('/removeproduct',ProdutoController.removeProduct);
router.post('/updateproduct',ProdutoController.updateproduct);

export default router;