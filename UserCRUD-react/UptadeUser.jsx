import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';

const UpdateUser = () => {

  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser({ name: newName });
      setNewName('');
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    updateUser({ name: ' ' });
    setNewName('');
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
        />
        <button type="submit">Update Name</button>
      </form>
      <form onSubmit={handleDelete}>
        <button type="submit">Delete Name</button>
      </form>
    </div>
  );
};

export default UpdateUser;
