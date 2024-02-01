import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { Link } from 'react-router-dom';

export default function MerchandForm() {




  const form = useRef();
  

  return (
  <>
   
   <Paper elevation={4} className='form_paper_merchan'>
      <div>
      <Box
        className='formwidthmerchan'
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        noValidate
        autoComplete="off"
        ref={form} 
      >
        <TextField id="standard-basic" name='user_name'  label="Name" type='name' variant="standard" />
        <TextField id="standard-basic" name='user_email'   label="Email" type='email' variant="standard" />
        <TextField id="standard-basic" name='user_contact'   label="Contact" type='number' variant="standard" />
        <TextField id="standard-basic" name='user_size'   label="Size for merchandise(XS, S, M , L , XL)" variant="standard" />

      </Box>

   <Link to={'/'}>
   <Stack direction="row" className='submit' spacing={3}>
         <Button variant="contained">Submit</Button>
      </Stack>
   </Link>
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
