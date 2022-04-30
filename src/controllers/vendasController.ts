import {Request,Response} from 'express';
import * as VendaHeaderServices from '../services/VendaHeaderServices';


export const salvarvenda = async (req:Request,res:Response) =>{

    const newvendacod = await VendaHeaderServices.gerarcodvenda(req.body);
    if(newvendacod instanceof Error){
        return res.json({error:newvendacod.message});
    }
    else return res.json({newvendacod});
}
