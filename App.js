import AppNavigator from './AppNavigator';
import  {UserProvider}  from './src/services/dadosUser/UserContext';
import React from "react";


export default function App() {
  return (

    <UserProvider>
        
          <AppNavigator/>
        
    </UserProvider>
  );
}


