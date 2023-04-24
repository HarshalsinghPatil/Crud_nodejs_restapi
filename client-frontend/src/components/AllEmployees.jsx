import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell,  TableRow, TableBody, Button, styled } from '@mui/material'
import { getEmployees, deleteEmployee } from '../service/api.js';
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

const AllEmployees = () => {
    const [employees, setEmployees] = useState([]);
    
    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }

    const getAllEmployees = async () => {
        let response = await getEmployees();
        setEmployees(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {employees.map((employee) => (
                    <TRow key={employee.id}>
                        <TableCell>{employee._id}</TableCell> {/* change it to employee.id to use JSON Server */}
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.phone}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${employee._id}`}>Edit</Button> {/* change it to employee.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteEmployeeData(employee._id)}>Delete</Button> {/* change it to employee.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllEmployees;