import React from 'react';
import HookUseReducer from '../components/HookUseReducer';
import HookUserEffect from '../components/HookUserEffect';
import HookUseState from '../components/HookUseState';
import { someContext } from '../components/HookUseContext';
import HookUseRef from '../components/HookUseRef';

// useContext
import { useContext } from 'react';


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
            <HookUseRef />
        </div>
    )
}

export default Home