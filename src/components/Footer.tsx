import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import CodeIcon from '@material-ui/icons/Code';

const styles = createStyles({
    footer: {
        backgroundColor: '#292c2f',
        color: 'white',
        height: '75px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        color: 'white',
        margin: '0 5px',
        fontWeight: 200
    },
    iconL: {
        color: 'white',
        fontWeight: 400,
        margin: '0 5px',
        fontSize: '32px'
    },
    spacer: {
        flex: 1,
        flexGrow: 1
    },
    padded: {
        padding: '0 10px'
    }
})

function Footer(props: any) {
    const { footer, link, padded, spacer, iconL } = props.classes;
    return (
        <footer className={footer}>
            <div className={padded}>
                <Typography className={link}>Created by,</Typography>
                <a href="https://github.com/adityaparab" target="_blank">
                    <Typography component="h6" className={link}>
                        Aditya Parab
                    </Typography>
                </a>
                <Typography className={link} component="h6">contact.adityaparab@gmail.com</Typography>
            </div>
            <div className={spacer} />
            <div className={padded}>
                <a href="https://github.com/adityaparab/redux-ui-builder">
                    <CodeIcon className={iconL} />
                </a>
            </div>
        </footer>
    );
}

export default withStyles(styles)(Footer);