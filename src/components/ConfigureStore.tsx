import * as React from 'react';
import { connect } from 'react-redux';

import { createStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


import StoreStateConfig from './StoreStateConfig';
import StoreActionsConfig from './StoreActionsConfig';

import { IStyledConnectedComponent } from '../models/IStyledConnectedComponent';
import { IReducer } from '../models/IReducer';
import { selectStoreIsValid } from '../store/actions/StoreState.actions';
import { Tooltip } from '@material-ui/core';

const styles = createStyles({
    footerButton: {
        margin: '0 10px;'
    },
    buttons: {
        borderTop: '1px solid #bdbdbd',
        height: '55px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    stepper: {
        borderBottom: '1px solid #bdbdbd'
    },
    component: {
        padding: '10px'
    },
    abandon: {
        alignSelf: 'flex-end'
    },
    icon: {
        margin: '0 5px',
        marginLeft: '-7px'
    },
    iconR: {
        marginLeft: '4px'
    },
    spacer: {
        display: 'flex',
        flex: 1
    },
    lc: {
        textTransform: 'lowercase'
    }
});

const ConfigureReducers = () => <h5>This is Configure Reducers Step</h5>;

interface IStep {
    title: string;
    component: any;
    id: number;
    key: string;
}

const steps: IStep[] = [
    {
        title: 'Configure State',
        component: StoreStateConfig,
        id: 1,
        key: 'configure-store-1'
    },
    {
        title: 'Configure Actions',
        component: StoreActionsConfig,
        id: 2,
        key: 'configure-actions-3'
    },
    {
        title: 'Configure Reducers',
        component: ConfigureReducers,
        id: 3,
        key: 'configure-reducers-2'
    }
];

const findIndex: (id: number) => number = (id: number) => steps.findIndex((s: IStep) => s.id === id);
const isFirstStep: (id: number) => boolean = (id: number): boolean => findIndex(id) === 0;
const isLastStep: (id: number) => boolean = (id: number): boolean => (findIndex(id) === (steps.length - 1));
const isCompleted: (id: number, activeStep: IStep) => boolean = (id: number, activeStep: IStep): boolean => {
    const currentIndex = findIndex(id);
    const activeIndex = findIndex(activeStep.id);
    return currentIndex < activeIndex;
}

interface ConfigureStoreProps extends IStyledConnectedComponent {
    isValid: boolean;
}

interface ConfigureStoreState {
    currentStep: IStep;
}

class ConfigureStore extends React.Component<ConfigureStoreProps, ConfigureStoreState> {

    constructor(props: ConfigureStoreProps) {
        super(props);
        this.state = {
            currentStep: steps[0]
        };
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleDiscard = this.handleDiscard.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handlePrev() {
        const currentIndex = findIndex(this.state.currentStep.id);
        const prevStep = steps.find((s: IStep) => findIndex(s.id) === currentIndex - 1);

        if (prevStep) {
            this.setState({
                currentStep: prevStep
            });
        }
    }

    handleTabChange() { }

    handleNext() {
        const currentIndex = findIndex(this.state.currentStep.id);
        const nextStep = steps.find((s: IStep) => findIndex(s.id) === currentIndex + 1);

        if (nextStep) {
            this.setState({
                currentStep: nextStep
            });
        }
    }

    handleDone() {
        console.log('Done... Should Navigate to Configure Components Section');
    }

    handleDiscard() {
        this.props.history.push('/');
    }

    render() {
        const { id } = this.state.currentStep;
        const activeStep = findIndex(id);
        const { classes = {} } = this.props;
        return (
            <div className="f c">
                {/* <div className={classes.stepper}>
                    <Stepper activeStep={activeStep}>
                        {
                            steps.map((s: IStep) => {
                                const props = {
                                    completed: isCompleted(s.id, this.state.currentStep)
                                };
                                const labelProps = {
                                    optional: (<Typography variant="caption">Required</Typography>)
                                };
                                return (
                                    <Step key={s.key} {...props}>
                                        <StepLabel {...labelProps}>{s.title}</StepLabel>
                                    </Step>
                                )
                            })
                        }
                    </Stepper>
                </div> */}
                <div>
                    <Tabs value={activeStep} onChange={this.handleTabChange} >
                        <Tab value={0} label="state.js" className={classes.lc}/>
                        <Tab value={1} label="constant.js" className={classes.lc}/>
                        <Tab value={2} label="actions.js" className={classes.lc}/>
                        <Tab value={3} label="reducer.js" className={classes.lc} />
                    </Tabs>
                </div>
                <div className={["f c", classes.component].join(' ')}>
                    {
                        <this.state.currentStep.component />
                    }
                </div>
                {/* <div className={classes.buttons}>
                    <Button disabled={!isLastStep(id)} className={classes.footerButton} variant="contained" color="primary" onClick={this.handleDone}>
                        Configure Components
                        <CheckIcon className={classes.iconR} />
                    </Button>

                    {this.props.isValid && <Button disabled={[steps.length - 1].includes(activeStep)} className={classes.footerButton} variant="contained" color="primary" onClick={this.handleNext}>
                        Next
                        <KeyboardArrowRightIcon className={classes.iconR} />
                    </Button>}

                    {
                        !this.props.isValid &&
                        <Tooltip title="Invalid JSON. Please fix the JSON in the editor before continuing" placement="top">
                            <Button className={classes.footerButton} variant="contained">
                                Next
                                <KeyboardArrowRightIcon className={classes.iconR} />
                            </Button>
                        </Tooltip>
                    }

                    <Button disabled={isFirstStep(id)} className={classes.footerButton} variant="contained" color="secondary" onClick={this.handlePrev}>
                        <KeyboardArrowLeftIcon className={classes.icon} />
                        Previous
                    </Button>
                    <span className={classes.spacer}></span>

                    <Button className={classes.footerButton} variant="contained" color="secondary" onClick={this.handleDiscard}>
                        <ClearIcon className={classes.icon} />
                        Discard
                    </Button>
                </div> */}
            </div>

        );
    }
}

function mapState(state: IReducer) {
    return {
        isValid: selectStoreIsValid(state)
    }
}

export default withStyles(styles)(connect(mapState)(ConfigureStore));