import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface VendaInstance extends Model{

}

export const venda_header = sequelize.define<VendaInstance>('venda_header',{

},{
tableName:'venda_header',
timestamps:false
});