import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add1 = (props) => {
    var[input,setinput]=useState(props.data);
    console.log(props.data)
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readValues=()=>{
        console.log("clicked")
        if(props.method=="post"){
        axios.post('http://localhost:3005/students',input)
        .then(response=>{
            alert("successfully added")
        })
    }
    else if(props.method==="put"){
      axios.put('http://localhost:3005/students/'+input.id,input)
      .then(response=>{
        alert("updated successfully")
        window.location.reload(false)
      })
      .catch(err=>console.log(err))
    }
  }

    
  return (
    <div>
   <p/>
      <TextField   variant="filled" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <p/>
       <Typography>{input.name}</Typography>
      <TextField id="filled-basic" label="grade" variant="filled" onChange={inputhandler1} 
      name='grade' value={input.grade} /><p/>
       <Typography>{input.grade}</Typography>
      <Button variant="contained" onClick={readValues}>save</Button><p/>
    </div>
  )
}

export default Add1
