import React from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Form from '../components/Form';
import PrimaryButton from '../components/PrimaryButton';
import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setValues } from '../store/formSlice';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  phoneNumber: yup.number(),
});

const normalizePhoneNumber = value => {
  const phoneNumber = parsePhoneNumberFromString(value);

  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

function Step2() {
  const { data } = useSelector(state => state.form);
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const hasPhone = watch('hasPhone');

  const onSubmit = data => {
    dispatch(setValues(data));
    navigator('../step3');
  };

  return (
    <>
      <Typography component='h2' variant='h5'>
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          error={!!errors.email}
          helperText={errors?.email?.message}
          label='Email'
          type='email'
          margin='normal'
          fullWidth
          required
        />
        <FormControlLabel
          label='Do you have a phone'
          control={
            <Controller
              control={control}
              name='hasPhone'
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  onChange={onChange} // send value to hook form
                  checked={value}
                  color='primary'
                />
              )}
            />
          }
        />

        {hasPhone && (
          <TextField
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            label='Phone number'
            type='tel'
            margin='normal'
            fullWidth
            onChange={e =>
              (e.target.value = normalizePhoneNumber(e.target.value))
            }
          />
        )}

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </>
  );
}

export default Step2;
