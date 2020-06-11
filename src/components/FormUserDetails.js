import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const FormUserDetails = (props) => {

    console.log('values: ', props.values)

    const continueForm = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" align='center' className={classes.title}>
                    Enter User Details
                </Typography>
                </Toolbar>
            </AppBar>


            <form style={styles.form}>
                <TextField onChange={props.handleInputsChange} value={props.values.firstName} margin='normal' id="standard-basic" label="First Name" name="firstName" />
                <TextField onChange={props.handleInputsChange} value={props.values.lastName} maring='normal' id="standard-basic" label="Last Name" name="lastName" />
                <TextField onChange={props.handleInputsChange} value={props.values.email} margin='normal' id="standard-basic" label="Email" name="email" />
                <Button variant="contained" color="primary" onClick={continueForm}>
                    Continue
                </Button>
            </form>
        </>
    )}

    const styles = {
        form: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

export default FormUserDetails