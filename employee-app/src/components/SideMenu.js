import React from 'react'
import { makeStyles} from "@material-ui/core";
import { Typography } from '@mui/material';

// withStyles & makeStyles

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '250px',
        height: '100%',
        backgroundColor: '#253053'
    },
    sideBar: {
        color: "white"
    }

})

const SideMenu = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.sideMenu}>
           <Typography variant="h3" component="div" style={classes.sideBar}>SIDE-BAR</Typography>
        </div>
    )
}

export default SideMenu;
