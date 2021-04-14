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
        <input type="text" name="add-user" value={user.name} onChange={(e) => setAddUser({ name: e.target.value })}/>
        <button type="button" onClick={() => handleAddUser()}>Cadastrar</button>
      </div>
    </>
  );
}

export default New;
