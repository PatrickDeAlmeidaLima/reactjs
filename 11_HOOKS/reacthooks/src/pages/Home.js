import React from 'react';
import HookUseReducer from '../components/HookUseReducer';
import HookUserEffect from '../components/HookUserEffect';
import HookUseState from '../components/HookUseState';

// useContext
import { useContext } from 'react';

import { someContext } from '../components/HookUseContext';

const Home = () => {
    const { contextValue } = useContext(someContext);


    return (
        <div>
            <HookUseState />
            <hr />
            <HookUseReducer />
            <hr />
            <HookUserEffect />
            <hr />
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr />
        </div>
    )
}

export default Home