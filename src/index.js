import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let model = { clicks: 0 };

const root = ReactDOM.createRoot(document.getElementById('root'));

function render() {

    root.render(
        <React.StrictMode>
            <App
                clicks = { model.clicks }
                onClick = {() => {
                  model.clicks += 1;
                  render();
                }}
            />
        </React.StrictMode>
    );
}

render();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
