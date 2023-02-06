import React from 'react';
import styled, {css} from 'styled-components';
import {space, color, typography, border} from 'styled-system';
import { theme } from '../../../theme/buttonsTheme/index';

import {SyntheticEvent} from "react";
import {ReactNode} from "react";

type Props = {
    /**
     * We include several predefined button styles,
     * each serving its own semantic purpose, with a few extras thrown in for more control.
     */
    variant?: 'primary' | 'primaryOrange' | 'text',
    children: ReactNode | string,
    position?: string,
    bottom?: string,
    /**
     * Make buttons look inactive by adding the disabled boolean attribute to any button element.
     */
    disabled?: boolean,
    fullWidth?: boolean,
    margin?: string,
    padding?: string,
    /**
     * Binds some action on button click.
     */
    onClick?: (event: SyntheticEvent<HTMLButtonElement>) => any,
};

const ButtonStyled = styled.button((props) => {
    const btnTheme = theme[props.variant || 'primary'];

    return css`
      text-decoration: none;
      outline: 2px solid white;
      box-shadow: 0 30px 40px rgba(240, 101, 126, 0.05);
      border: none;
      padding: ${props => props.padding || '13px 0'};
      position: ${props => props.position || 'relative'};
      bottom: ${props => props.bottom || '0'};
      cursor: pointer;
      display: inline-block;
      align-items: center;
      text-align: center;
      user-select: none;
      
      vertical-align: middle;
      white-space: normal;
      overflow: hidden;
      transition: color 2s;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 140%;
      margin: ${props => props.margin || '0'};
      width: ${props => props.fullWidth ? '100%' : 'auto'};

      ${btnTheme.default};
      ${space};
      ${color};
      ${typography};
      ${border};
      
      &:hover {
        ${btnTheme.hover};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.65;
        box-shadow: none;
      }
    `;
});

export const Button = ({children, ...props}: Props) => <ButtonStyled {...props}>{children}</ButtonStyled>;