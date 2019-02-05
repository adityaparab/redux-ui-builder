import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import * as monaco from 'monaco-editor';

import { createStyles, withStyles, StyledComponentProps } from '@material-ui/core/styles';

const styles = createStyles({
    editor: {
        height: '100%',
        width: '100%'
    }
});

interface MonacoEditorProps extends DispatchProp, StyledComponentProps, monaco.editor.IEditorConstructionOptions {
    classes: any;
}

const defaultOptions: monaco.editor.IEditorConstructionOptions = {
    theme: 'vs-dark',
    language: 'json',

}

class MonacoEditor extends React.Component<MonacoEditorProps> {
    private textAreaRef = React.createRef<HTMLDivElement>();
    private _editor: any = null;
    constructor(props: MonacoEditorProps) {
        super(props);
    }

    componentDidMount() {
        this._editor = monaco.editor.create(this.textAreaRef.current as HTMLElement, { ...defaultOptions, ...this.props });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.editor} ref={this.textAreaRef}></div>
        );
    }
}

export default withStyles(styles)(connect()(MonacoEditor));