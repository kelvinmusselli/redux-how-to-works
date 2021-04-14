import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewUser } from '../../store/modules/users/actions'

function New() {
  const [user, setAddUser] = useState('');
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addNewUser(user))
  };

  return (
    <>
      <div>
        <input type="text" value={user.name} onChange={(e) => setAddUser({ name: e.target.value })}/>
        <button onClick={() => handleAddUser()}>Cadastrar</button>
      </div>
    </>
  );
}

export default New;
