
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
