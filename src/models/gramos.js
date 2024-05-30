const { connectMysql } = require('../dbconnection');
class GramosModels {
    static async consultar() {
        let db = await connectMysql();
        let query = db('gramos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('gramos').where('id_gramos', id);
    }

    static async agregar(gramos) {
        let db = await connectMysql();
        let query = db('gramos').insert(gramos)
        return await query;
    }

    static async editar(id,gramos) {
        let db = await connectMysql();
        let query = db('gramos')
        .where({ id_gramos: id })
        .update(gramos)
        return await query;
    }

    static async actualizar(id_gramos, campos) {
        let db = await connectMysql();
        return await db('gramos').where('id_gramos', id_gramos).update(campos);
    }
  
}

module.exports = GramosModels;