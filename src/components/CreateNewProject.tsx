import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';

import { createStyles, withStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';

import InputField from './InputField';

import { CreateProjectFormConfig, ProjectFormFieldConfig } from '../config/FormConfig';
import { IReducer } from '../models/IReducer';

const styles = createStyles({
    jcc: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    padded5: {
        padding: '15px 5px'
    },
    formContainer: {
        width: '600px',
    },
    margin10: {
        margin: '0 10px'
    },
    button: {
        margin: '0 10px',
        width: '50%'
    },
    icon: {
        margin: '0 5px'
    },
    buttons: {
        flexDirection: 'row',
        margin: '10px 0'
    }
});


interface CreateNewProjectProps extends RouteComponentProps, DispatchProp {
    state: IReducer;
    classes: any;
}

function CreateNewProject(props: CreateNewProjectProps) {
    const { classes, state } = props;

    function startStoreConfiguration() {
        props.history.push('/configure-store');
    }

    return (
        <div className={['f', 'c', classes.jcc].join(' ')}>
            <Paper className={[classes.padded5, classes.formContainer].join(' ')} elevation={5}>
                <Typography component="h3" variant="h5" className={classes.margin10}>Create New Project</Typography>
                <FormGroup>
                    {
                        CreateProjectFormConfig.map(
                            (pc: ProjectFormFieldConfig) => <InputField key={pc.id} {...pc} value={pc.valueSelector(state)} />
                        )
                    }
                    <FormControl className={classes.buttons}>
                        <Fab variant="extended" color="primary" aria-label="Create" className={classes.button} onClick={startStoreConfiguration}>
                            <SaveIcon className={classes.icon} />
                            Create
                        </Fab>
                        <Fab variant="extended" color="secondary" aria-label="Cancel" className={classes.button}>
                            <ClearIcon className={classes.icon} />
                            Cancel
                        </Fab>
                    </FormControl>
                </FormGroup>
            </Paper>
            <hr />
        </div>
    );
}

function mapState(state: IReducer) {
    return { state }
}

export default withRouter(
    withStyles(styles)(
        connect(mapState)(CreateNewProject)
    )
);