import db from './mongoConnect.js'

const employees = db.collections('employees')

export const addEmpoyee = async (request, response) => {
    if(request.body.firstName && request.body.lastName && request.body.position){
    try{
        const newEmployee = await employees.instertOne(request.body)
        response.send(newEmployee)
    } catch (err){
        response.send('error adding employee to database')
        throw err
    }
    } else { 
        response.send('REQUEST body needs to have a firstName, lastName and position field')
    }
}