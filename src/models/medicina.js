const { connectMysql } = require('../dbconnection');
class MedicinaModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Medicina');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Medicina').where('id_numMedicina', id);
    }


    static async agregar(Medicina) {
        let db = await connectMysql();
        let query = db('Medicina').insert(Medicina)
        return await query;
    }

    static async editar(id,Medicina) {
        let db = await connectMysql();
        let query = db('Medicina')
        .where({ id_numMedicina: id })
        .update(Medicina)
        return await query;
    }

    static async actualizar(id_numMedicina, campos) {
        let db = await connectMysql();
        return await db('Medicina').where('id_numMedicina', id_numMedicina).update(campos);
    }
  

    static async precio() {
        try {
            let db = await connectMysql();

            const mostExpensive = await db('Medicina')
              .select('nombre', 'precio')
              .orderBy('precio', 'desc')
              .first();
        
            const cheapest = await db('Medicina')
              .select('nombre', 'precio')
              .orderBy('precio', 'asc')
              .first();
        
              return {
                mostExpensive,
                cheapest
              }
          } catch (error) {
            return Promise.reject(error)
          }
    }
  


}

module.exports = MedicinaModel;

