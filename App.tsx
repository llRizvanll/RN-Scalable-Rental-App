/**
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import { Nav } from './src/Nav';
import {store} from './src/redux/Store';

const App = () => {

    return (
        <Provider store={store}>
          <Nav></Nav>
        </Provider>
    );
};

export default App;
