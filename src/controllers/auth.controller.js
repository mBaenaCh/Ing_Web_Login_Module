import Employee from '../models/Employee'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
    
    const {email, username, password} = req.body;
        
    const employeeFound = await Employee.findOne({email: email})
    if (!employeeFound) return res.status(400).json({message: "User not found"})
    
    const updatedObject = {
        username: username,
        password: await Employee.encodePassword(password)
    }
  
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeFound._id, updatedObject, {
        new: true,
    });

    return res.status(200).json(updatedEmployee)
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