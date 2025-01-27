import { Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { CounterState } from './CounterReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function Contact() {
  const data = useSelector((state: CounterState) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant='h2'>
        Contact Page
      </Typography>
      <Typography>
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch({ type: "DECREMENT" })} variant='outlined' color='error'>Decrement</Button>
        <Button onClick={() => dispatch({ type: "INCREMENT" })} variant='outlined' color='secondary'>Increment</Button>
      </ButtonGroup>
    </>
  );
}
