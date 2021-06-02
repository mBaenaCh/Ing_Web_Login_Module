import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const employeeSchema = new Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
});

//Se usa statics para la creacion de metodos sin la instanciacion de objetos
employeeSchema.statics.encodePassword = async (password) =>{
    //Metodo de encriptado
    const salt = await bcrypt.genSalt(10)
    //Encriptacion contraseña
    return await bcrypt.hash(password, salt)
}

//Aqui iria tambien el metodo de comparacion de contraseñas para el SignIn

export default model('Employee', employeeSchema);