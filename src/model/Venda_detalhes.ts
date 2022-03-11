import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface VendaInstance extends Model{

}

export const venda_detalhes = sequelize.define<VendaInstance>('venda_detalhes',{

},{
tableName:'venda_detalhes',
timestamps:false
});