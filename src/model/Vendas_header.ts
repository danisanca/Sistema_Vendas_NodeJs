import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export interface VendaInstance extends Model{
    cod_venda:number;
    cod_cliente:number;
    desconto:Float32Array;
    data_da_venda:Date;
    id_usuario:number;
    valor_total_venda:Float32Array;
}

export const vendas_header = sequelize.define<VendaInstance>('vendas_header',{
    cod_venda:{
        primaryKey:true,
        type: DataTypes.STRING
    },
    cod_cliente:{
        type: DataTypes.INTEGER
    },
    desconto:{
        type: DataTypes.FLOAT
    },
    data_da_venda:{
        type: DataTypes.DATE
    },
    id_usuario:{
        type: DataTypes.INTEGER
    },
    valor_total_venda:{
        type: DataTypes.FLOAT
    }
},
{
tableName:'vendas_header',
timestamps:false
});