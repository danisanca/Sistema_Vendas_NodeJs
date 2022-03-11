import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface ProdutoInstance extends Model{

}

export const Produtos = sequelize.define<ProdutoInstance>('Produtos',{

},{
tableName:'produtos',
timestamps:false
});