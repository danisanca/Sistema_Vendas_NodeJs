import {Request,Response} from "express";
import * as UsuarioServices from '../services/UsuarioServices';

export const login = async (req:Request,res:Response)=>{
    var {usuario,senha} = req.body;

   if(req.body.usuario && req.body.senha){
 
     const loginUser = await UsuarioServices.loginUsuario(usuario,senha);
 
       
        if(loginUser instanceof Error){
            return res.json({error: loginUser.message})
        }
       
            console.log(loginUser);
            return res.json({access_token:loginUser})
                
        
    }
   else 
        return res.json({msg:'Dados Incompletos'})
    
};


