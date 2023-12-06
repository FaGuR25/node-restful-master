const { connectMysql } = require('../dbconnection');
class EnfermedadesModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('enfermedades');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('enfermedades').where('id_enfermedades', id);
    }


    static async agregar(enfermedades) {
        let db = await connectMysql();
        let query = db('enfermedades').insert(enfermedades)
        return await query;
    }

    static async editar(id,enfermedades) {
        let db = await connectMysql();
        let query = db('enfermedades')
        .where({ id_enfermedades: id })
        .update(enfermedades)
        return await query;
    }

    static async actualizar(id_enfermedades, campos) {
        let db = await connectMysql();
        return await db('enfermedades').where('id_enfermedades', id_enfermedades).update(campos);
    }
  


}

module.exports = EnfermedadesModel;

