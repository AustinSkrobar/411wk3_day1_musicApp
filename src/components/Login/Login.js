import React from 'react';
import { TextField, Button} from '@material-ui/core';
import { styled, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(1),
        width: '40vm',
    },
  }));


const MyButton = styled(Button)({
    margin: '10px',
    width: '40vw'
})

export default function BasicTextFields(props) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
             <TextField 
                id="outlined-Username"
                label="Username"
                variant="outlined"
                size="small"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                size="small"
            />
            <MyButton 
                variant="contained" 
                color="primary"  
                onClick={() => { props.setIsLoggedIn(true) }}
            >
                Login
            </MyButton>
        </form>
  );
}