const { connectMysql } = require('../dbconnection');
class MedicamentosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Medicamentos');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Medicamentos').where('id_medicamento', id);
    }


    static async agregar(Medicamentos) {
        let db = await connectMysql();
        let query = db('Medicamentos').insert(Medicamentos)
        return await query;
    }

    static async editar(id,Medicamentos) {
        let db = await connectMysql();
        let query = db('Medicamentos')
        .where({ id_medicamento: id })
        .update(Medicamentos)
        return await query;
    }

    static async actualizar(id_medicamento, campos) {
        let db = await connectMysql();
        return await db('Medicamentos').where('id_medicamento', id_medicamento).update(campos);
    }
}
module.exports = MedicamentosModel;

