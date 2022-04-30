import { vendas_header,VendaInstance } from "../model/Vendas_header";
import { Produtos } from "../model/Produtos";
import { Cliente } from "../model/Clientes";
import {v4 as uuidv4} from 'uuid';
import { json } from 'sequelize';
import { venda_detalhes } from "../model/Venda_detalhes";

/* - Detalhamento de funcionalidades

//--Modulo Lançamento de Vendas
|x| - Salvar uma nova venda

//---Modulo Histórico de Venda
|x| - Listar vendas
|x| - Buscar Venda especifica
|x| - Gerar valor vendido no mês atual
|x| - Gerar quantidade vendida no mês atual

*/

export const gerarcodvenda = async (data:any) =>{
    let id_venda = uuidv4();
    var item:[];
    item = data.items;
    
   const newvenda = await vendas_header.create({
       cod_venda:id_venda,
       cod_cliente:data.cod_cliente,
       desconto:data.desconto,
       data_da_venda:data.data_da_venda,
       id_usuario:data.id_usuario,
       valor_total_venda:data.valor_total_venda
   }) 
    if(newvenda){
        item.forEach(async function(value){
          const itemdetails = await venda_detalhes.create({
            cod_venda:id_venda,
            cod_produto:value["cod_produto"],
            quantidade:value["quantidade"],
            desconto:value["desconto"],
            valor_do_produto:value["valor_do_produto"]
          })
        });
    }
    else return new Error("Venda não concluida");
    
}
