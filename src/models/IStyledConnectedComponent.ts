import { ComponentProps, Props } from 'react';
import { RouteComponentProps } from "react-router";
import { DispatchProp } from "react-redux";
import { StyledComponentProps } from "@material-ui/core/styles";


export interface IStyledConnectedComponent extends RouteComponentProps, DispatchProp<any>, StyledComponentProps { }
export interface IStyledConnectedComponentWithProps extends ComponentProps<any> { }