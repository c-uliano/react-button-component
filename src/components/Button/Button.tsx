import React from 'react';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ButtonProps {
    text: string;
    variant?: 'text' | 'contained' | 'outlined';
    color?: 'warning' | 'success' | string; // whatever you enter has to have a class by that same name to style it up
    size?: 'sm' | 'md' |'lg' | string; // whatever you enter has to have a class by that same name to style it up
    uppercase?: boolean;
    borderRadius?: 'br-slight' | 'br-curved' | 'br-round';
    disabled?: boolean;
    href?: string;
    onClick?: (e:MouseEvent) => void;
    icon?: IconProp;
}

const Button = (props: ButtonProps) => {
    const buttonObj = [
        styles.button,
        props.variant && styles[props.variant],
        props.color && styles[props.color],
        props.size && styles[props.size],
        props.uppercase && styles.uppercase,
        props.borderRadius && styles[props.borderRadius],
    ].join(' ');

    return (
        <>
            {props.href ? (
                <a className={buttonObj}>
                    {props.icon && <FontAwesomeIcon icon={props.icon} />}
                    {props.text}
                </a>
            ) : (
                <button className={buttonObj} disabled={props.disabled}>
                    {props.icon && <FontAwesomeIcon icon={props.icon} />}
                    {props.text} 
                </button>
            )}
        </>
    )
}

export default Button