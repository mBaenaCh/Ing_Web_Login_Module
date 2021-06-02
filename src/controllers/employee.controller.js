/* Archivo que define las funcionalidades a usar en cada ruta */
import Employee from '../models/Employee'

export const createEmployee = async (req,res) => {
    const {name, lastName, email, username} = req.body

    const newEmployee = new Employee({name, lastName, email, username})

    const savedEmployee = await newEmployee.save()

    res.status(201).json(savedEmployee)
}

export const getEmployees = async (req,res) => {
    const employees = await Employee.find()
    res.json(employees)
}

export const getEmployeeById = async (req,res) => {
    const employee = await Employee.findById(req.params.employeeId)
    res.status(200).json(employee)
}

//Se puede usar modificando (en el body) el valor de password
export const updateEmployeeById = async (req,res) => {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, {
        new: true
    })
    res.status(200).json(updatedEmployee)

}

export const deleteEmployeeById = async (req,res) => {
    await Employee.findByIdAndDelete(req.params.employeeId)
    res.status(204).json()
}