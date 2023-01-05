import React from 'react'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'

const Home = () => {
    return (
        <div>
            <HookUseState />
            <hr />
            <HookUseReducer />
        </div>
    )
}

export default Home