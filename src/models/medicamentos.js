const { connectMysql } = require('../dbconnection');
class MedicamentosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('medicamentos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('medicamentos').where('id_medicamentos', id);
    }

    static async agregar(medicamentos) {
        let db = await connectMysql();
        let query = db('medicamentos').insert(medicamentos)
        return await query;
    }

    static async editar(id,medicamentos) {
        let db = await connectMysql();
        let query = db('medicamentos')
        .where({ id_medicamentos: id })
        .update(medicamentos)
        return await query;
    }

    static async actualizar(id_medicamentos, campos) {
        let db = await connectMysql();
        return await db('medicamentos').where('id_medicamentos', id_medicamentos).update(campos);
    }
  


  
}

module.exports = MedicamentosModel;