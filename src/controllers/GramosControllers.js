const GramosModel = require('../models/gramos');

class GramosControllers {
    static async indexGet(req, res) {
        let data = await GramosModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await GramosModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    static async agregar(req, res){
       
        try {

            let data = await GramosModel.agregar(req.body)


            data = await GramosModel.consultarPorId(data[0]);
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

            let data = await GramosModel.editar(req.params.id,req.body)
            
            data = await GramosModel.consultarPorId(req.params.id);
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

            const result = await GramosModel.actualizar(id, updatedFields);

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


module.exports = GramosControllers;