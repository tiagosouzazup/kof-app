import React from 'react';

const Button = () => (
    <button
        onClick={() => {this.props.handleClick(this.props.label); }}>Cadastrar</button>
);
class Personagem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: " ",
        idade: " ",
        ano: " "
      };
      this.onChange = (evento) => {
          this.setState({nome: evento.target.value});
          this.setState({idade: evento.target.value});
          this.setState({ano: evento.target.value});
      };
    }
    render() {
      return (
        <div>
            Nome: <input name="nome" value={this.state.nome} onChange={this.onChange} type="text" />
            Nome: <input name="idade" value={this.state.nome} onChange={this.onChange} type="text" />
            Nome: <input name="ano" value={this.state.nome} onChange={this.onChange} type="text" />
        </div>
      );
    }
  }
export default Button;