const { connectMysql } = require('../dbconnection');
class LibrosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Libros');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Libros').where('id_libro', id);
    }


    static async agregar(Libros) {
        let db = await connectMysql();
        let query = db('Libros').insert(Libros)
        return await query;
    }

    static async editar(id,Libros) {
        let db = await connectMysql();
        let query = db('Libros')
        .where({ id_libro: id })
        .update(Libros)
        return await query;
    }

    static async actualizar(id_libro, campos) {
        let db = await connectMysql();
        return await db('Libros').where('id_libro', id_libro).update(campos);
    }
}
module.exports = LibrosModel;

