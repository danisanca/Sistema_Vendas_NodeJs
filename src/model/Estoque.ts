import { NOMEM } from 'dns';
import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface EstoqueInstance extends Model{
    id:number;
    cod_produto:number;
    nome:string;
    quantidade:number;
    unid_medida:string;
    
}

export const Estoque = sequelize.define<EstoqueInstance>('Estoque',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    cod_produto:{
        type: DataTypes.INTEGER
    },
    nome:{
        type: DataTypes.STRING
    },
    quantidade:{
        type: DataTypes.INTEGER
    },
    unid_medida:{
        type: DataTypes.STRING
    },
},{
tableName:'estoque',
timestamps:false
});