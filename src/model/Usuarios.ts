import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface UsuarioInstance extends Model{

}

export const Usuarios = sequelize.define<UsuarioInstance>('Usuarios',{

},{
tableName:'usuarios',
timestamps:false
});