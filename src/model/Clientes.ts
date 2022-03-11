import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface ClienteInstance extends Model{

}

export const Cliente = sequelize.define<ClienteInstance>('Cliente',{

},{
tableName:'clientes',
timestamps:false
});