import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface ClienteInstance extends Model{
    cod_cliente:number;
    nome_cliente:string;
    cpf:string;
    data_nascimento:Date;
    telefone:number;
    data_de_cadastro:Date;
    data_de_alteracao:Date;
}

export const Cliente = sequelize.define<ClienteInstance>('Cliente',{
    cod_cliente:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nome_cliente:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING
    },
    data_nascimento:{
        type: DataTypes.DATE
    },
    telefone:{
        type: DataTypes.INTEGER
    },
    data_de_cadastro:{
        type: DataTypes.DATE
    },
    data_de_alteracao:{
        type: DataTypes.DATE
    },
},{
tableName:'clientes',
timestamps:false
});