import * as React from 'react';
import { connect } from 'react-redux';
import * as monaco from 'monaco-editor';

import { createStyles, withStyles } from '@material-ui/core/styles';
import { IStyledConnectedComponentWithProps } from '../models/IStyledConnectedComponent';

const styles = createStyles({
    editor: {
        height: '100%',
        width: '100%'
    }
});

const defaultOptions: monaco.editor.IEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'json'
}

interface MonacoEditorProps extends IStyledConnectedComponentWithProps {
    onEditorChange: (value: string) => void;
    onEditorMount: () => void;
}

class MonacoEditor extends React.Component<MonacoEditorProps> {
    private textAreaRef = React.createRef<HTMLDivElement>();
    private _editor: any = null;
    constructor(props: MonacoEditorProps) {
        super(props);
    }

    componentDidMount() {
        this._editor = monaco.editor.create(this.textAreaRef.current as HTMLElement, { ...defaultOptions, ...this.props });
        if (this.props.onEditorChange) {
            this._editor.onDidChangeModelContent(() => {
                this.props.onEditorChange(this._editor.getValue());
            })
        }
    }

    render() {
        const { classes = {} } = this.props;
        return (
            <div className={classes.editor} ref={this.textAreaRef}></div>
        );
    }
}

export default withStyles(styles)(connect()(MonacoEditor));