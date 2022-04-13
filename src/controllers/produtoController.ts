import {Request,Response} from 'express';
import * as ProdutosServices from '../services/ProdutoServices';




export const cadastrarProduto = async (req:Request,res:Response) =>{
    var {cod_produto,nome_do_produto,cod_barras,uni_de_medida,valor_custo,tx_de_venda} = req.body;
   
    const newcadastro = await ProdutosServices.Cadastro(cod_produto,nome_do_produto,cod_barras,uni_de_medida,valor_custo,tx_de_venda);
     
    if(newcadastro instanceof Error){
        return res.json({error: newcadastro.message})
    }
     
    else{
        return res.json({msg:"Produto Cadastrado"})
    }
};

export const getAllProducts = async (req:Request,res:Response) => {
    const products = await ProdutosServices.listAll();
    if(products instanceof Error){
        return res.json({error: products.message})
    }
     
    else{
        return res.json({products});
    }
    
};

export const removeProduct = async(req:Request,res:Response) =>{
    var {cod_produto} = req.body;

    const product = await ProdutosServices.Remover(cod_produto);

    if(product instanceof Error){
        return res.json({error: product.message})
    }
     
    else{
        return res.json({msg:"Produto Deletado com Sucesso"});
    }
};

export const updateproduct = async(req:Request,res:Response)=>{
var {id} = req.body;
    const fieldupdate = await ProdutosServices.Update(req.body,id);
    
    if(fieldupdate instanceof Error){
        return res.json({error: fieldupdate.message})
    }
     
    else{
        return res.json({msg:"Produto Atualizado"})
    }
};



