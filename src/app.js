import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routes from './routes';
const App = ({ history }) => {
    console.log('history', history);
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
}
export default App;