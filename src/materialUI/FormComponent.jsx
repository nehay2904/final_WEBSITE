import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import emailjs from '@emailjs/browser';

export default function BasicTextFields() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7wfwqo5', 'template_swu0mhz', form.current, 'TqO-LjB1jDL7sr4EH')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
          console.log("message not sent")
      });
  };




  return (
  <>
   
   <Paper elevation={4} className='form_paper_section'>
      <div>
      <Box
        className='formwidth'
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        ref={form} 
      >
        <TextField id="standard-basic" name='user_name' label="Name" variant="standard" />
        <TextField id="standard-basic" name='user_email' label="Email" variant="standard" />
        <TextField id="standard-basic" name='user_contact' label="Any query" variant="standard" />
        {/* <TextField id="standard-basic" name='user_size' label="Size for merchandise(XS, S, M , L , XL)" variant="standard" /> */}
      </Box>

      <Stack direction="row" className='submit' spacing={3}>
        <Button onClick={sendEmail} variant="contained">Submit</Button>
      </Stack>
      </div>
      <div>
      <Box
        className='formwidth'
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '34ch' },
        }}
        noValidate
        autoComplete="off"
      >
       
      </Box>

      </div>
    </Paper>
   
  
  
  </>
  );
}
