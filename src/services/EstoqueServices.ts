import { Estoque } from "../model/Estoque";

/* - Detalhamento de funcionalidades

|x| - Incluir novo produto no estoque(Abastecer produto ja existente)
|x| - Remover produtos do estoque
|x| - Buscar produto no estoque
|x| - Listar produtos do estoque

*/

export const adicionar = async(data:Map<String,any>,cod_produto:number)=>{

    const newProduct = await Estoque.findOne({where:{cod_produto}});

}


