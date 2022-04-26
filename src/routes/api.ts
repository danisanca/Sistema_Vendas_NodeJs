import { Router } from "express";
import * as ApiController from '../controllers/apiController';
import * as UserController from '../controllers/userController';
import * as ProdutoController from './../controllers/produtoController';
import * as EstoqueController from './../controllers/estoqueController';
import * as ClienteController from './../controllers/clienteController';

const router = Router();

router.get('/ping',ApiController.ping);
router.post('/login',UserController.login);
//-
router.post('/cadastro',ProdutoController.cadastrarProduto);
router.get('/listall',ProdutoController.getAllProducts);
router.post('/removeproduct',ProdutoController.removeProduct);
router.post('/updateproduct',ProdutoController.updateproduct);
//-
router.post('/cadastrarestoque',EstoqueController.cadastrarEstoque);
router.post('/removeestoque',EstoqueController.deletarproduto);
router.get('/listarestoque',EstoqueController.listarprodutos);
router.get('/procurarestoque',EstoqueController.producarproduto);
//-
router.post('/cadastrarcliente',ClienteController.cadastrarCliente);
router.post('/removercliente',ClienteController.deletarCliente);
router.post('/atualizarcliente',ClienteController.atualizarCliente);
router.get('/buscarcliente',ClienteController.buscarCliente);
router.get('/listarcliente',ClienteController.listarCliente);



export default router;