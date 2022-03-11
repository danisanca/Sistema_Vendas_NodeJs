import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface EstoqueInstance extends Model{

}

export const Estoque = sequelize.define<EstoqueInstance>('Estoque',{

},{
tableName:'estoque',
timestamps:false
});