import { ClienteInstance,Cliente } from "../model/Clientes";

/* - Detalhamento de funcionalidades
 
|o| - Incluir novo cliente no sistema
|o| - Remover cliente do sistema
|o| - Editar informações do cliente
|o| - Listar clientes cadastrados no sistema
|o| - Buscar clientes cadastrados no sistema
*/



export const registar = async(data:ClienteInstance,cod_cliente:number) =>{

    const findcliente = await Cliente.findOne({where:{cod_cliente}});
    
    if(!findcliente){
        const newclient = await Cliente.create(data.toJSON());
        return newclient;
    }
    else return new Error("Cliente ja cadastrado.")

}

export const update = async(data:ClienteInstance,cod_cliente:number) =>{

    const findcliente = await Cliente.findOne({where:{cod_cliente}});

        if(!findcliente){
            return new Error("Cliente Não Localizado")
        }
        else{
            try{
                await Cliente.update(data.toJSON(),{where:{cod_cliente}});
            }catch(error){
                console.log(error);
            }
            
        }

}

export const remover = async(cod_cliente:number)=>{
    const findcliente = await Cliente.findOne({where:{cod_cliente}});

        if(!findcliente){
            return new Error("Cliente não localizado");
        }
        else return await Cliente.destroy({where:{cod_cliente}});
}
export const Buscar = async(cod_cliente:number)=>{
    const findcliente = await Cliente.findOne({where:{cod_cliente}});
    if(!findcliente){
        return new Error("Cliente não localizado");
    }
    else return findcliente;
}

export const Listar = async()=>{
        const findclients = await Cliente.findAll();
        if(!findclients){
            return new Error("Nenhum Cliente encontrado.")
        }
        else return findclients;
}