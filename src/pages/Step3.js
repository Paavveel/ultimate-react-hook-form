import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import Form from '../components/Form';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';

function Step3() {
  const navigator = useNavigate();
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    navigator('../result');
  };

  return (
    <>
      <Typography component='h2' variant='h5'>
        Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name='files'
          defaultValue={[]}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <Dropzone onDrop={onChange}>
                {({ getRootProps, getInputProps }) => (
                  <Paper
                    style={{
                      backgroundColor: '#eee',
                      textAlign: 'center',
                      cursor: 'pointer',
                      color: '#333',
                      padding: '10px',
                      marginTop: '20px',
                    }}
                    variant='outlined'
                    {...getRootProps()}
                  >
                    <CloudUpload
                      style={{
                        marginTop: '16px',
                        color: '#888',
                        fontSize: '42px',
                      }}
                    />
                    <input {...getInputProps()} name='files' onBlur={onBlur} />
                    <p>Drag 'n' drop files here, or click to select files</p>
                  </Paper>
                )}
              </Dropzone>
              <List>
                {value.map((f, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <InsertDriveFile />
                    </ListItemIcon>
                    <ListItemText primary={f.name} secondary={f.size} />
                  </ListItem>
                ))}
              </List>
            </>
          )}
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </>
  );
}

export default Step3;
