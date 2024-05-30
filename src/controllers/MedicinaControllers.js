const MedicinaModel = require('../models/medicina');

class MedicinaControllers {
    static async indexGet(req, res) {
        let data = await MedicinaModel.consultar();
        res.send(data);
    }
    static async precioGet(req, res) {
        let data = await MedicinaModel.precio();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await MedicinaModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    
    static async agregar(req, res){
       
        try {

            let data = await MedicinaModel.agregar(req.body)


            data = await MedicinaModel.consultarPorId(data[0]);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
            console.log(error);
            res.status(404).send({code: 404, message:error.sqlMessage});
 
        }
    }

    static async editar(req, res){
       
        try {

            let data = await MedicinaModel.editar(req.params.id,req.body)
            
            data = await MedicinaModel.consultarPorId(req.params.id);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
            res.status(404).send({code: 404, message:error.sqlMessage});
 
        }     
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await MedicinaModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = MedicinaControllers;