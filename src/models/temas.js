const { connectMysql } = require('../dbconnection');
class TemasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('temas');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('temas').where('id_tema', id);
    }
}

module.exports = TemasModel;