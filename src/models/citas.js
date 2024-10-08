const { connectMysql } = require('../dbconnection');
class CitasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Citas');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Citas').where('id_citas', id);
    }


    static async agregar(Citas) {
        let db = await connectMysql();
        let query = db('Citas').insert(Citas)
        return await query;
    }

    static async editar(id,Citas) {
        let db = await connectMysql();
        let query = db('Citas')
        .where({ id_citas: id })
        .update(Citas)
        return await query;
    }
    
    static async eliminar(id,Citas) {
        let db = await connectMysql();
        let query = db('Citas')
        .where({ id_citas: id })
        .delete(Citas)
        return await query;
    }

    static async actualizar(id_citas, campos) {
        let db = await connectMysql();
        return await db('Citas').where('id_citas', id_citas).update(campos);
    }
}
module.exports = CitasModel;

