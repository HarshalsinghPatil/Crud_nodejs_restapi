import axios from "axios";

const URL = 'http://localhost:8080';

export const addEmployee = async (data) =>{
    try{
        return await axios.post(`${URL}/addemp`,data);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
}

export const addFeedback = async (data) =>{
    try{
        return await axios.post(`${URL}/addfeed`,data);
    }catch(error){
        console.log('Error while calling Add Feedback API',error);
    }
}

export const allEmployee = async (data) =>{
    try{
        return await axios.get(`${URL}/allemp`,data);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
}



/*export const getEmployee = async (data) =>{
    try{
        return await axios.get(`${URL}/allemp/`,data);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
}*/
export const getFeedbacks = async () => {
   
    try{
        return await axios.get(`${URL}/viewfeed/`);
    }catch(error){
        console.log('Error while calling View Feedback API',error);
    }
}
export const getEmployees = async (id) => {
    id = id || '';
    try{
        return await axios.get(`${URL}/allemp/${id}`);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
}


export const editEmployee = async (data) =>{
    try{
        return await axios.put(`${URL}/edit`,data);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
} 

export const deleteEmployee = async (data) =>{
    try{
        return await axios.delete(`${URL}/delemp`,data);
    }catch(error){
        console.log('Error while calling Add Employee API',error);
    }
}