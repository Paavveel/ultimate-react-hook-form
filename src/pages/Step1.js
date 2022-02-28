import React from 'react';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Form from '../components/Form';
import PrimaryButton from '../components/PrimaryButton';
import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

function Step1() {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = data => {
    navigator('step2');
  };
  return (
    <>
      <Typography component='h2' variant='h5'>
        Step 1
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
          label='First Name'
          margin='normal'
          fullWidth
        />
        <TextField
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
          label='Last Name'
          margin='normal'
          fullWidth
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </>
  );
}

export default Step1;
