import {Request,Response} from 'express';
import * as EstoqueServices from '../services/EstoqueServices';
import { Estoque } from './../model/Estoque';


export const cadastrarEstoque = async(req:Request,res:Response)=>{
    var {cod_produto} = req.body;
    
    var data = Estoque.build(req.body);

    const newproduto = await EstoqueServices.adicionar(data,cod_produto);
    
    if(newproduto instanceof Error){
        return res.json({error:newproduto.message});
    }
    else{
        return res.json({newproduto});
    }

}


export const deletarproduto = async(req:Request,res:Response)=>{
    var {cod_produto} = req.body;
    const deleteproduct = await EstoqueServices.remover(cod_produto);

        if(deleteproduct instanceof Error){
            return res.json({error:deleteproduct.message});

        }
        else res.json({deleteproduct});
}

export const producarproduto = async(req:Request,res:Response)=>{
    var {cod_produto} = req.body;

    const search = await EstoqueServices.searchone(cod_produto);
        if(search instanceof Error){
                return res.json({error:search.message});
        }
        else{
            res.json({search})
        }

}

export const listarprodutos = async(req:Request,res:Response)=>{
    
    const listar = await EstoqueServices.searchall();

        if(listar instanceof Error){
            return res.json({error:listar.message});
        }
        else{
            return res.json({listar});
        }
}