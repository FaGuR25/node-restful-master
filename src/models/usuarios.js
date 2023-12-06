const { connectMysql } = require('../dbconnection');
class UsuariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('usuarios');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('usuarios').where('id_usuario', id);
    }

    
    static async agregar(usuarios) {
        let db = await connectMysql();
        let query = db('usuarios').insert(usuarios)
        return await query;
    }

    static async editar(id,usuarios) {
        let db = await connectMysql();
        let query = db('usuarios')
        .where({ id_usuario: id })
        .update(usuarios)
        return await query;
    }

    static async actualizar(id_usuario, campos) {
        let db = await connectMysql();
        return await db('usuarios').where('id_usuario', id_usuario).update(campos);
    }
  
}

module.exports = UsuariosModel;