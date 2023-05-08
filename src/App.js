import logo from './logo.svg';
import './App.css';

// Декларативный стиль. Функция возвращает как должен отображаться элемент DIV без подробного пошагового описания его в JavaScript коде
export const App = () => {
    const year = new Date().getFullYear();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
                <span>{year}</span>
            </header>
        </div>
    );
};
