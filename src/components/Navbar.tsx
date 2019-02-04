import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';

import { createStyles, withStyles, StyledComponentProps } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = createStyles({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

type ReduxStyleProps = DispatchProp & StyledComponentProps;

interface NavbarComponentProps extends React.Props<ReduxStyleProps> {
    classes: any;
}

class Navbar extends React.Component<NavbarComponentProps> {

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>Redux App Builder</Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(connect()(Navbar));