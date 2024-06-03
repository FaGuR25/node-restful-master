const { connectMysql } = require('../dbconnection');
class GuardarModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Guardar');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Guardar').where('id_usuario', id);
    }


    static async agregar(Guardar) {
        let db = await connectMysql();
        let query = db('Guardar').insert(Guardar)
        return await query;
    }

    static async editar(id,Guardar) {
        let db = await connectMysql();
        let query = db('Guardar')
        .where({ id_usuario: id })
        .update(Guardar)
        return await query;
    }

    static async actualizar(id_usuario, campos) {
        let db = await connectMysql();
        return await db('Guardar').where('id_usuario', id_usuario).update(campos);
    }
}
module.exports = GuardarModel;

