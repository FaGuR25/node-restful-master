const { connectMysql } = require('../dbconnection');
class NotasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Notas');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Notas').where('id_notas', id);
    }


    static async agregar(Notas) {
        let db = await connectMysql();
        let query = db('Notas').insert(Notas)
        return await query;
    }

    static async editar(id,Notas) {
        let db = await connectMysql();
        let query = db('Notas')
        .where({ id_notas: id })
        .update(Notas)
        return await query;
    }

    static async actualizar(id_notas, campos) {
        let db = await connectMysql();
        return await db('Notas').where('id_notas', id_notas).update(campos);
    }
}
module.exports = NotasModel;

