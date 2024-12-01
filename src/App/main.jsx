import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { store } from '../Futures/reducers/index.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>,
)