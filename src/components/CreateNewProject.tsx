import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';

import { createStyles, withStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    }
});


interface CreateNewProjectProps extends RouteComponentProps, DispatchProp {
    state: IReducer;
    classes: any;
}

function CreateNewProject(props: CreateNewProjectProps) {
    const { classes, state } = props;
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