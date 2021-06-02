import Employee from '../models/Employee'

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
    res.json('signin')
}