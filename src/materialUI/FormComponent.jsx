import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function BasicTextFields() {

  const form = useRef();




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
        <Button variant="contained">Submit</Button>
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
