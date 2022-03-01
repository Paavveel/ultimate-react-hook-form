import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { InsertDriveFile } from '@mui/icons-material';
import PrimaryButton from '../components/PrimaryButton';
import Swal from 'sweetalert2';
import Confetti from 'react-confetti';

function Result() {
  const [success, setSuccesss] = useState(false);
  const { data } = useSelector(state => state.form);
  const entries = Object.entries(data).filter(entry => entry[0] !== 'files');
  const { files } = data;

  const onSubmit = () => {
    Swal.fire('great job!', 'Data is sent', 'success');
    setSuccesss(true);
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <>
      <Typography component='h2' variant='h5'>
        📋 Form Values
      </Typography>
      <TableContainer
        sx={{
          mb: '30px',
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Field</TableCell>
              <TableCell align='right'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map(entry => (
              <TableRow key={entry[0]}>
                <TableCell>{entry[0]}</TableCell>
                <TableCell align='right'>{entry[1]?.toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {files && (
        <>
          <Typography component='h2' variant='h5'>
            📦 Files
          </Typography>
          <List>
            {files.map((f, index) => (
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
      <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
      <Link to='/'>Start over</Link>
    </>
  );
}

export default Result;
