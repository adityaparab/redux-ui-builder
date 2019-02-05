import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';

import { createStyles, withStyles, StyledComponentProps } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import * as ProjectActions from '../store/actions/CreateNewProject.actions';
import { ProjectFormFieldConfig } from '../config/FormConfig';

const styles = createStyles({
    margin10: {
        margin: '10px'
    }
});

interface InputFieldProps extends ProjectFormFieldConfig {
    value: string;
    classes: any;
}

type Props = InputFieldProps & DispatchProp & StyledComponentProps;

class InputField extends React.Component<Props> {
    private inputRef = React.createRef();
    constructor(props: Props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { dispatch } = this.props;
        dispatch(this.props.valueEmitter(event.target.value));
    }

    render() {
        const { classes } = this.props;
        return (
            <FormControl className={classes.margin10}>
                {!this.props.select && <TextField
                    id={this.props.id}
                    label={this.props.label}
                    placeholder={this.props.placeholder}
                    innerRef={this.inputRef}
                    className={this.props.className}
                    value={this.props.value}
                    margin="normal"
                    onChange={this.handleInputChange}
                />}
                {
                    this.props.select && (
                        <>
                            <InputLabel htmlFor={this.props.id}>{this.props.label}</InputLabel>
                            <Select
                                value={this.props.value}
                                onChange={this.handleInputChange}
                                inputProps={{
                                    name: this.props.label,
                                    id: this.props.id,
                                }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {
                                    this.props.options.filter((op: any) => !op.disabled).map((op: any) => {
                                        return <MenuItem key={this.props.id + "_" + op.value} value={op.value} disabled={op.disabled}>{op.title}</MenuItem>
                                    })
                                }
                            </Select>
                        </>
                    )
                }
            </FormControl>
        );
    }
}

export default withStyles(styles)(connect()(InputField));