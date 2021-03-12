import React, { useState } from 'react'
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core';
import useTable from "../../components/useTable";
import * as employeeService from "../../services/employeeService";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    
}))

const headCells = [
    { id: 'fullName', label: 'Employee Name' },
    { id: 'gender', label: 'Gender'},
    { id: 'email', label: 'Email Address'},
    { id: 'mobile', label: 'Mobile Number' },
    { id: 'city', label: 'Address'},
    { id: 'nationality', label: 'Nationality'},
    { id: 'education', label: 'Education'},
    { id: 'birthDate', label: 'Date of birth'},
]

export default function Employees() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())

    const {
        TblContainer,
        TblHead,
        
    } = useTable(records, headCells);

    return (
        <>
            <PageHeader
                title="New Employee"
                subTitle=""
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <EmployeeForm />

            </Paper>
            <Paper className={classes.pageContent}>
                
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            records.map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.gender}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.nationality}</TableCell>
                                    <TableCell>{item.education}</TableCell>
                                    <TableCell>{item.birthDate}</TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
            </Paper>
        </>
    )
}