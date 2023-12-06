const { connectMysql } = require('../dbconnection');
class MedicosModels {
    static async consultar() {
        let db = await connectMysql();
        let query = db('medicos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('medicos').where('id_medico', id);
    }

    static async agregar(medicos) {
        let db = await connectMysql();
        let query = db('medicos').insert(medicos)
        return await query;
    }

    static async editar(id,medicos) {
        let db = await connectMysql();
        let query = db('medicos')
        .where({ id_medico: id })
        .update(medicos)
        return await query;
    }

    static async actualizar(id_medico, campos) {
        let db = await connectMysql();
        return await db('medicos').where('id_medico', id_medico).update(campos);
    }
  
}

module.exports = MedicosModels;