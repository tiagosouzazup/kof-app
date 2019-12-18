
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import Row from './components/Row';

class SinglePage extends React.Component {
    render() {
        return (
            <div>
                 <Header/>
                <table id="tabela">
                    <Row title="batata"/>
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
