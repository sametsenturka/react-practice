import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';
import UpdateUser from './UptadeUser';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>User Context Example</h1>
        <UserProfile />
        <UpdateUser />
      </div>
    </UserProvider>
  );
}

export default App;