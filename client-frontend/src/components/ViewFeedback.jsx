import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getFeedbacks } from '../service/api.js';
import { Link } from 'react-router-dom';
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;
const ViewFeedback = () =>{
    const [feedbacks, setFeedbacks] = useState([]);
    
    useEffect(() => {
        getAllFeedbacks();
    }, []);
    const getAllFeedbacks = async () => {
        let response = await getFeedbacks();
        setFeedbacks(response.data);
    }
    return(
               <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Feedback</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {feedbacks.map((feedback) => (
                    <TRow key={feedback.id}>
                        <TableCell>{feedback._id}</TableCell> {/* change it to feedback.id to use JSON Server */}
                        <TableCell>{feedback.feedback}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${feedback._id}`}>Edit</Button> {/* change it to feedback.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )

}

export default ViewFeedback;