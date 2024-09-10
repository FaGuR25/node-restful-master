const NotasModel = require('../models/notas');

class NotasControllers {
    static async indexGet(req, res) {
        let data = await NotasModel.consultar();
        res.send(data);
    }
    static async precioGet(req, res) {
        let data = await NotasModel.precio();
        res.send(data);
    }
    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await NotasModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    
    static async agregar(req, res){
       
        try {

            let data = await NotasModel.agregar(req.body)


            data = await NotasModel.consultarPorId(data[0]);
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

            let data = await NotasModel.editar(req.params.id,req.body)
            
            data = await NotasModel.consultarPorId(req.params.id);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
            res.send(data[0]);
        } catch (error) {
            res.status(404).send({code: 404, message:error.sqlMessage});
 
        }     
    }

    static async eliminar(req, res){
        try {
            //let data = await NotasModel.eliminar(req.params.id,req.body)
            
            let data = await NotasModel.consultarPorId(req.params.id);
            if (data.length == 0){
                res.status(404).send({code: 404, message:'not found'});
            }
        
            data = await NotasModel.eliminar(req.params.id,req.body)
            res.send({ message: 'Successfull delete '});

        } catch (error) {
            res.status(404).send({code: 404, message:error.sqlMessage});
 
        }     
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await NotasModel.actualizar(id, updatedFields);

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

module.exports = NotasControllers;