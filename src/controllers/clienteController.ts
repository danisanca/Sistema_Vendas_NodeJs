import {Response,Request} from 'express';
import { Cliente } from '../model/Clientes';
import * as ClienteService from '../services/ClienteServices';

export const cadastrarCliente = async(req:Request,res:Response)=>{
    var {cod_cliente} = req.body;
    var data = Cliente.build(req.body);

    const newcliente = await ClienteService.registar(data,cod_cliente);
    if(newcliente instanceof Error){
        return res.json({error:newcliente.message});
    }
    else{
        return res.json({newcliente});
    }

}
export const deletarCliente = async(req:Request,res:Response)=>{
    var {cod_cliente} = req.body;

    const removeproduto = await ClienteService.remover(cod_cliente);

    if(removeproduto instanceof Error){
        return res.json({error:removeproduto.message});
    }
    else{return res.json({removeproduto});}

}
export const atualizarCliente = async(req:Request,res:Response)=>{
    var{cod_cliente} = req.body;
    var data = Cliente.build(req.body);
    const updatecliente = await ClienteService.update(data,cod_cliente);

    if(updatecliente instanceof Error){
        return res.json({error:updatecliente.message})
    }
    else{
        return res.json({updatecliente});
    }
}
export const buscarCliente = async(req:Request,res:Response)=>{
    var{cod_cliente} = req.body;

    const buscarcliente = await ClienteService.Buscar(cod_cliente);

    if(buscarcliente instanceof Error){
        return res.json({error:buscarcliente.message})
    }
    else return res.json({buscarcliente});
}
export const listarCliente = async(req:Request,res:Response)=>{
    
    const listarcliente = await ClienteService.Listar();
    if(listarcliente instanceof Error){
        return res.json({error:listarcliente.message})
    }
    else return res.json({listarcliente});
}