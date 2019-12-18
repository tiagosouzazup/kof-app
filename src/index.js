
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class SinglePage extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <span><img src="kof.png"></img></span>
                    <h1>The King Of Fighters</h1>
                </header>
                <table id="tabela">
                    <tr>
                        <td>Foto do Personagem</td>
                        <td>Nome</td>
                        <td>Local de Origem</td>
                        <td>Primeira Aparição no Jogo</td>
                    </tr>
                    <tr>
                        <td><img src="iori.jpeg"></img></td>
                        <td>Iori Iagami</td>
                        <td>Japão</td>
                        <td>Kof95</td>
                    </tr>
                    <tr>
                        <td><img src="rugal.jpeg"></img></td>
                        <td>Rugal Bernstein</td>
                        <td>desconhecido</td>
                        <td>Kof94</td>
                    </tr>
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <SinglePage />,
    document.getElementById('root')
);

serviceWorker.unregister()
