import { Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { decrement, increment } from './CounterReducer';

export default function Contact() {
  const {data} = useAppSelector(state => state.counter)
  const dispatch = useAppDispatch();

  return (
    <>
      <Typography variant='h2'>
        Contact Page
      </Typography>
      <Typography>
        The data is: {data}
      </Typography>
      <ButtonGroup>
        <Button onClick={() => dispatch(decrement(1))} variant='outlined' color='error'>Decrement</Button>
        <Button onClick={() => dispatch(increment(1))} variant='outlined' color='secondary'>Increment</Button>
        <Button onClick={() => dispatch(increment(5))} variant='outlined' color='primary'>Increment by 5</Button>
      </ButtonGroup>
    </>
  );
}
