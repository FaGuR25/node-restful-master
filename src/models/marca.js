const { connectMysql } = require('../dbconnection');
class MarcaModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('marca');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('marca').where('id_marca', id);
    }

    
    static async agregar(marca) {
        let db = await connectMysql();
        let query = db('marca').insert(marca)
        return await query;
    }

    static async editar(id,marca) {
        let db = await connectMysql();
        let query = db('marca')
        .where({ id_marca: id })
        .update(marca)
        return await query;
    }

    static async actualizar(id_marca, campos) {
        let db = await connectMysql();
        return await db('marca').where('id_marca', id_marca).update(campos);
    }
  
}

module.exports = MarcaModel;