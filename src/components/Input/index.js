import React from 'react';
import './Input.css';

export default function Input(props) {
    const { placeholder } = props;
    return (
        <input placeholder={ placeholder }></input>
    )
}