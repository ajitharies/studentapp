import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View2 = () => {
    var [students,setstudents]=useState([])
    useEffect(()=>{
       axios.get('http://localhost:3005/students')
       .then(response=>{setstudents(students=response.data)
    console.log(students)})
       .catch(error=>console.log(error))

    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete('http://localhost:3005/students/'+id)
        .then(response=>{
            alert("Successfully deleted")
            window.location.reload(false)
        })
        .catch(err=>console.Console.log(err))

    }
  return (
 <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>
                    id
                </TableCell>
                <TableCell>
                    name
                </TableCell>
                <TableCell>
                    grade
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {students.map((value,index)=>{
                return <TableRow>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell><Button onClick={()=>deleteValue(value.id)}>delete</Button></TableCell>
                    <TableCell><Button>update</Button></TableCell>
                 </TableRow>
            })}
        </TableBody>
    </Table>
 </TableContainer>
  )
}

export default View2
