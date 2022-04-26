import { Estoque,EstoqueInstance} from "../model/Estoque";
import { Produtos } from "../model/Produtos";

/* - Detalhamento de funcionalidades

|o| - Incluir novo produto no estoque(Abastecer produto ja existente)
|o| - Remover produtos do estoque
|o| - Buscar produto no estoque
|o| - Listar produtos do estoque

*/

export const adicionar = async(data:EstoqueInstance,cod_produto:number)=>{

    const validProduct = await Produtos.findOne({where:{cod_produto}});
        
    if(validProduct != null){
           const searchstorage = await Estoque.findOne({where:{cod_produto}})
            if(searchstorage == null){
                const newproduto = await Estoque.create(
                    data.toJSON()
                );
                return newproduto;
            }
            else {
                await Estoque.update(data,{where:{cod_produto}});
            }
        
        
    }
    else return new Error("Produto Não Cadastrado");

}

export const remover = async(cod_produto:number)=>{ 

    const searchproduct = await Estoque.findOne({where:{cod_produto}});

    if(searchproduct){
        const deleteproduct = await Estoque.destroy({where:{cod_produto}});
        return deleteproduct;
    }
    else return new Error('Produto não localizado no estoque')
    

}

export const searchone = async(cod_produto:number) => {
    const validarproduto = await Produtos.findOne({where:{cod_produto}})

    if(!validarproduto){
        return new Error("Produto invalido");
    }
    else{

    const searcproduct = await Estoque.findOne({where:{cod_produto}})

    if(searcproduct) return searcproduct;
    else return new Error("produto nao encontrado.");
    }
}

export const searchall = async() => {

    const searcproduct = await Estoque.findAll();

    if(searcproduct) return searcproduct;
    else return new Error("nenhum produto nao encontrado.")
}