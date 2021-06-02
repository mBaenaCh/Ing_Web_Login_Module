/* Archivo para definir la coleccion de la base de datos*/
import mongoose from 'mongoose'

mongoose.connect("mongodb://user:user123@cluster0-shard-00-00.zifgs.mongodb.net:27017,cluster0-shard-00-01.zifgs.mongodb.net:27017,cluster0-shard-00-02.zifgs.mongodb.net:27017/employeesdb?ssl=true&replicaSet=atlas-bvtusk-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))