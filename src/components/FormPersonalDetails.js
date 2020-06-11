import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
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

const FormPersonalDetails = (props) => {

    const continueForm = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const backForm = (e) => {
        e.preventDefault()
        props.prevStep()
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
                    Enter Personal Details
                </Typography>
                </Toolbar>
            </AppBar>


            <form style={styles.form}>
                <TextField onChange={props.handleInputsChange} value={props.values.occupation} margin='normal' id="standard-basic" label="Occupation" name="occupation" />
                <TextField onChange={props.handleInputsChange} value={props.values.city} maring='normal' id="standard-basic" label="City" name="city" />
                <TextField onChange={props.handleInputsChange} value={props.values.bio} margin='normal' id="standard-basic" label="Biography" name="bio" />
                <div>
                    <Button style={styles.button} variant="contained" color="secondary" onClick={backForm}>
                        Back
                    </Button>
                    <Button style={styles.button} variant="contained" color="primary" onClick={continueForm}>
                        Continue
                    </Button>
                </div>
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
        },
        button: {
            marginRight: '10px'
        }
    }

export default FormPersonalDetails