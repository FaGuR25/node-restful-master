const { connectMysql } = require('../dbconnection');
class PrecioModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('precio');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('precio').where('id_precio', id);
    }

    static async agregar(precio) {
        let db = await connectMysql();
        let query = db('precio').insert(precio)
        return await query;
    }

    static async editar(id,precio) {
        let db = await connectMysql();
        let query = db('precio')
        .where({ id_precio: id })
        .update(precio)
        return await query;
    }

    static async actualizar(id_precio, campos) {
        let db = await connectMysql();
        return await db('precio').where('id_precio', id_precio).update(campos);
    }
  


  
}

module.exports = PrecioModel;