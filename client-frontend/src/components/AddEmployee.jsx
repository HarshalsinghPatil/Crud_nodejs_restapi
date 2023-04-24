import { useState } from "react";
import { FormControl, FormGroup, InputLabel ,Input, Typography,styled,Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {addEmployee} from '../service/api';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px
    }

`  
const defaultValue = {
    id:"",
    name:"",
    email:"",
    phone:""
} 

const AddEmployee = () =>{
    // 2. To store that user i/p in the state
    const [employee , setEmployee] = useState(defaultValue);
    //4. to move to other page
    const navigate = useNavigate();
    //1. To capture the user input
    const onValueChange = (e) => {
        console.log(e.target.value,e.target.name); 
        setEmployee({...employee,[e.target.name]:e.target.value })
        console.log(employee);
    }
    //3. To store values in form of api to store in DB
    const addEmployeeDetails = async() =>{
        await addEmployee(employee);
        navigate('/allemp')
    }
    return(
        <Container>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl> 
                <InputLabel>Id</InputLabel>
                <Input onChange={(e)=>onValueChange(e) } name="id"/>
            </FormControl>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)}name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl> 
                <Button variant="contained" onClick= {() => addEmployeeDetails}>Add Employee</Button>
            </FormControl>        
            </Container>
    )
}

export default AddEmployee;