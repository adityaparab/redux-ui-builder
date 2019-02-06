import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
        display: 'inline-block',
        margin: '0 5px'
    }
})

function Footer(props: any) {
    const { footer, link } = props.classes;
    return (
        <footer className={footer}>
            <div>
                <Typography className={link} component="span">
                    Created By
                    <a href="https://github.com/adityaparab" target="_blank">
                        <Typography component="span" className={link}> 
                            Aditya Parab
                        </Typography>
                    </a>
                </Typography>
            </div> 
        </footer>
    );
}

export default withStyles(styles)(Footer);