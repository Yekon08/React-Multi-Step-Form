import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

const Confirm = (props) => {

    console.log('values: ', props.values)

    const continueForm = (e) => {
        e.preventDefault()
        props.nextStep()

        // Process Form Back-End //
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
                    Confirm Your Data
                </Typography>
                </Toolbar>
            </AppBar>

            <div style={styles.ul}>
                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={props.values.firstName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={props.values.lastName} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={props.values.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Occupation" secondary={props.values.occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="city" secondary={props.values.city} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="bio" secondary={props.values.bio} />
                    </ListItem>
                </List>
            </div>
        
            <div style={styles.divButton}>
                <Button style={styles.button} variant="contained" color="secondary" onClick={backForm}>
                    Back
                </Button>
                <Button style={styles.button} variant="contained" color="primary" onClick={continueForm}>
                    Continue
                </Button>
            </div>
        </>
    )}

    const styles = {
        button: {
            marginRight: '10px'
        },
        ul: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        divButton: {
            display: 'flex',
            justifyContent: 'center'
        }
    }

export default Confirm