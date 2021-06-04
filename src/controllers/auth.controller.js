import Employee from '../models/Employee'
import jwt from 'jsonwebtoken'
import config from '../config'

//Register
export const signUp = async (req, res) => {
    //Lo que espero recibir en el body para el registro del empleado
    const {name, lastName, email, username, password, roles} = req.body;

    //Se crea un objeto empleado
    const newEmployee = new Employee({
        name,
        lastName,
        email,
        username,
        password: await Employee.encodePassword(password),
        roles
    })
    
    //Se registra en la base de datos
    const savedEmployee = await newEmployee.save();

    res.json('signup')
}

//Login
export const signIn = async (req, res) => {
    //Encontrar el empleado por el username
    const employeeFound = await Employee.findOne({username: req.body.username})
    if (!employeeFound) return res.status(400).json({message: "User not found"})

    //Comparar la contraseña ingresada con la guardada en la BD
    const matchPassword = await Employee.comparePassword(req.body.password, employeeFound.password)
    if (!matchPassword) return res.status(401).json({token: null, message: 'Password or username is invalid'}) 
    
    //Crear el token
    const token = jwt.sign({id: employeeFound._id}, config.SECRET, {
        expiresIn: 86400
    })
    res.json({token: token})
}