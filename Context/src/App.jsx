import React, { useContext } from 'react';
import { AuthContext } from './component/AuthContextProvider'; // Adjust the import path
import Dashboard from './component/Dashboard';
import Login from './component/Login';

function App() {
  const { authState } = useContext(AuthContext);

  return (
    <div>
      {authState.isAuth ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
