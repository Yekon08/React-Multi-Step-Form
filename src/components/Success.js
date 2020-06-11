import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

const Success = (props) => {

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

            <div style={styles.text}>
                <h1>Thank You for Your Submission</h1>
                <p>You will get an email with further instructions (or not) :)</p>
            </div>
        </>
    )}

    const styles = {
        text: {
            textAlign: 'center'
        }
    }

export default Success