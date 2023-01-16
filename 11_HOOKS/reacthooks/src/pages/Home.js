import React from 'react';
import HookUseReducer from '../components/HookUseReducer';
import HookUserEffect from '../components/HookUserEffect';
import HookUseState from '../components/HookUseState';
import { someContext } from '../components/HookUseContext';
import HookUseRef from '../components/HookUseRef';

// useContext
import { useContext } from 'react';
import HookUseCallBack from '../components/HookUseCallBack';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
import UseCustom from '../components/UseCustom';


const Home = () => {
    const { contextValue } = useContext(someContext);


    return (
        <div>
            <hr />
            <HookUseState />
            <HookUseReducer />
            <HookUserEffect />
            <h2>useContext</h2>
            <p>Valor do context: {contextValue}</p>
            <hr />
            <HookUseRef />
            <HookUseCallBack />
            <HookUseMemo />
            <HookUseLayoutEffect />
            <HookUseImperativeHandle />
            <UseCustom />
        </div>
    )
}

export default Home