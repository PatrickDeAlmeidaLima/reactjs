import React from 'react'
import HookUseReducer from '../components/HookUseReducer'
import HookUserEffect from '../components/HookUserEffect'
import HookUseState from '../components/HookUseState'

const Home = () => {
    return (
        <div>
            <HookUseState />
            <hr />
            <HookUseReducer />
            <hr />
            <HookUserEffect />
        </div>
    )
}

export default Home