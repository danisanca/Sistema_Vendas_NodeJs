import { Usuarios } from "../model/Usuarios";
import bcrypt from 'bcrypt';
/* - Detalhamento de funcionalidades

|x| - Logar no sistema
|x| - Registrar usuario
|x| - Deletar usuarios
|x| - Criar novo usuario
|x| - Resetar senha de usuario

*/


export const loginUsuario = async(usuario:string, senha:string) => {
    const user = await Usuarios.findOne({where:{usuario}})
    let authLogin:boolean = false;

    if(user){
        const senhaUser = await Usuarios.findOne({where:{senha}})
        if(!senhaUser){
            return new Error('Senha Incorreta');
        }
         else return authLogin = true;

    }
    else{
        return new Error('Usuario não Existe');
    }
}


