import React from 'react'
// useContext
import { useContext } from 'react';

import { someContext } from '../components/HookUseContext';

const About = () => {

  const { contextValue } = useContext(someContext);

  return (
    <div>
      <h2>About</h2>
      <p>Valor do contexto: {contextValue}</p>
    </div>
  )
}

export default About