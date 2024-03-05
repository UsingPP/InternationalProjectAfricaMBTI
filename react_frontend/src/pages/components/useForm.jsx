import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      '@media (min-width:600px)': {
        width: '90%',
      },
      width: '95%',
      margin: theme.spacing(1),
    },
    maxWidth: '900px',
  },
}));

export function useForm(initialData) {
  const [values, setValues] = useState(initialData);
  function valueChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(value, values);
  }
  return {
    values,
    setValues,
    valueChange,
  };
}

export function Form(props) {
  const classes = useStyles();
  return <form className={classes.root}>{props.children}</form>;
}
