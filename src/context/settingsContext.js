import React, { createContext } from 'react';

export const SettingsContext = createContext()

function SettingsProvider(props)
{
  var initialValues = []

  const getInitialValues = () =>
  {
    for (let i = 0; i < 500; i++)
    {
      const randomNumbers =
      {
        id: i,
        size: Math.random(),
        red: Math.random(),
        blue: Math.random(),
        green: Math.random(),
        flickerRate: Math.random(),

      };
      initialValues.push(randomNumbers)
    }
  }

  getInitialValues()

  return (
    <SettingsContext.Provider value={initialValues}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;