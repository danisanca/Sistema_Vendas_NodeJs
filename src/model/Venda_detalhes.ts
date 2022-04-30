import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface VendaInstance extends Model{
    id_detalhes:number;
    cod_venda:number;
    cod_produto:number;
    quantidade:number;
    desconto:number;
    valor_do_produto:number;
}

export const venda_detalhes = sequelize.define<VendaInstance>('venda_detalhes',{
    id_detalhes:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    cod_venda:{
        type: DataTypes.STRING
    },
    cod_produto:{
        type: DataTypes.INTEGER
    },
    quantidade:{
        type: DataTypes.INTEGER
    },
    desconto:{
        type: DataTypes.FLOAT
    },
    valor_do_produto:{
        type: DataTypes.FLOAT
    },

},{
tableName:'venda_detalhes',
timestamps:false
});