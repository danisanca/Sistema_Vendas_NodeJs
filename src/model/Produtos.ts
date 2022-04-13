import {Model,DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface ProdutoInstance extends Model{
    id:number;
    codproduto:number;
    nome_do_produto:string;
    cod_barras:string;
    unid_medida:string;
    valor_custo:number;
    tx_de_venda:number;
    valor_de_entrada:number;
    desconto:number;
}

export const Produtos = sequelize.define<ProdutoInstance>('Produtos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    cod_produto:{
        type: DataTypes.INTEGER
    },
    nome_do_produto:{
        type: DataTypes.STRING
    },
    cod_barras:{
        type: DataTypes.STRING
    },
    unid_medida:{
        type: DataTypes.STRING
    },
    valor_custo:{
        type: DataTypes.FLOAT
    },
    tx_de_venda:{
        type: DataTypes.FLOAT
    },
    valor_de_venda:{
        type: DataTypes.FLOAT
    },
    desconto:{
        type: DataTypes.FLOAT
    }

},{
tableName:'produtos',
timestamps:false
});