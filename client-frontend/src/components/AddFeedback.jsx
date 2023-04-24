

import { useState } from "react";
import { FormControl, FormGroup, InputLabel ,Input, Typography,styled,Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {addFeedback} from '../service/api';

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
    feedback:""
} 

const AddFeedback = () => {
    const [feedback, setFeedback] = useState(defaultValue);
    const navigate = useNavigate();
  
    const onValueChange = (e) => {
        console.log(e.target.value,e.target.name); 
        setFeedback({...feedback,[e.target.name]:e.target.value })
        console.log(feedback);
    }

    const addFeedbackDetails = async() =>{
    await addFeedback(feedback);
    navigate('/viewfeed')
    }
  return (
     <Container>
            <Typography variant="h4">Add Feedback</Typography>
            <FormControl> 
                <InputLabel>Id</InputLabel>
                <Input onChange={(e)=>onValueChange(e) } name="id"/>
            </FormControl>
            <FormControl> 
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e) } name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Feedback</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="feedback"/>
            </FormControl>
            <FormControl> 
                <Button variant="contained" onClick= {() => addFeedbackDetails}>Add Feedback</Button>
            </FormControl>        
            </Container>
  );
};
export default AddFeedback;