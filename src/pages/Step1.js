import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../components/Form';
import PrimaryButton from '../components/PrimaryButton';
import { TextField } from '@mui/material';

function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <Typography component='h2' variant='h5'>
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('firstName')}
          label='First Name'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
        />
        <TextField
          {...register('lastName')}
          label='Last Name'
          type='text'
          variant='outlined'
          margin='normal'
          fullWidth
        />

        {/* <Input
          {...register('firstName')}
          id='firstName'
          type='text'
          label='First Name'
        />
        <Input
          {...register('lastName')}
          id='lastName'
          type='text'
          label='Last Name'
        /> */}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </>
  );
}

export default Step1;
