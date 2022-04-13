import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface UsuarioInstance extends Model{
    id:number;
    usuario:string;
    senha:string;
    ultima_atualizacao:Date;
    data_criacao:Date;
    acesso:number;
}

export const Usuarios = sequelize.define<UsuarioInstance>('Usuarios',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    usuario:{
        type: DataTypes.STRING
    },
    senha:{
        type: DataTypes.STRING
    },
    ultima_atualizacao:{
        type: DataTypes.DATE
    },
    data_criacao:{
        type: DataTypes.DATE
    },
    acesso:{
        type: DataTypes.INTEGER
    },
},{
tableName:'usuarios',
timestamps:false
});