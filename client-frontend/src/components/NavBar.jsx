import { AppBar, Toolbar,styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`

`;

const Tab = styled(NavLink)`
    font-size : 20px;
    margin-right: 40px;
    color : inherit;
    text-decoration : none;
`
const NavBar = () =>{
    return (
        <Header position='static'>
            <Toolbar>
                <Tab to={'/'}>Employee Feedback System</Tab>
                <Tab to={'/allemp'}>View Employee</Tab>
                <Tab to={'/addemp'}>Add Employee</Tab>
                <Tab to={'/addfeed'}>Add Feedback</Tab>
                <Tab to={'/viewfeed'}>View Feedback</Tab>
            </Toolbar>
        </Header>
    )
}

export default NavBar;