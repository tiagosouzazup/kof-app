import React from 'react';

const Button = () => (
    <button
        onClick={() => {this.props.handleClick(this.props.label); }}>Cadastrar</button>
);
export default Button;