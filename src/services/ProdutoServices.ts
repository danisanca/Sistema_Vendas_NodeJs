import { Produtos } from "../model/Produtos";
/* - Detalhamento de funcionalidades

|o| - Incluir novo produto no sistema
|o| - Remover produtos do sistema
|x| - Editar informações de produtos
|o| - Listar produtos do cadastrados
*/

export const Cadastro = async(cod_produto:number,nome_do_produto:string,cod_barras:string,unid_de_medida:string, valor_custo:number,tx_de_venda:number) => {
    var valor_de_venda = 1;
    var desconto = 1 ;

    const findproduto = await Produtos.findOne({where:{cod_produto}});

    if(findproduto){
        return new Error('Produto ja cadastrado');
    }
    else{  
        const newproduto = await Produtos.create({
            cod_produto,
            nome_do_produto,
            cod_barras,
            unid_de_medida,
            valor_custo,
            tx_de_venda,
            valor_de_venda,
            desconto
        });
        return newproduto;
    };
};

export const listAll = async()=>{

    const listprodutos = await Produtos.findAll();
    if(listprodutos == null){
        return new Error("Nenhum Produto Cadastrado.")
    }
    return listprodutos;

};

export const Remover = async (cod_produto:number) => {
 
    const findproduto = await Produtos.findOne({where:{cod_produto}})
    
    if(!findproduto){
        return new Error('Produto não localizado.')
    }
    else{
        const produto = await Produtos.destroy({where:{cod_produto}})
        return produto;
    }
};

export const BuscarProduto = async(id:number) =>{
    const buscarproduto = await Produtos.findOne({where:{id}});
};

export const Update = async(data:Map<String,any>,id:number)=>{

    const findproduto = await Produtos.findOne({where:{id}});
    

    if(!findproduto){
        return new Error('Produto não localizado.')
    }
    else{
            try{//cod_product
               await Produtos.update(data,{where:{id}});
                    console.log(data);
            }
            catch(error){
                console.log(error);
            };

    }
};
