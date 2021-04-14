import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { removeUser, getUsers } from '../../store/modules/users/actions'

function Home() {

  const history = useHistory();
  const dispatch = useDispatch();

  // para trazer dados de um reducer utilize o useSelector
  const { users } = useSelector(state => state.users);
  const [listUsers, setListUsers] = useState(null)

  const handleRemoveUser = (user) => {
    //no momento que removi um item do array preciso usar o useEffect para recriar o meu array
    dispatch(removeUser(user))
  };

  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

  useEffect(() => {
    setListUsers(users);
  }, [users]);

  return (
    <>
      <ul>
        {
          listUsers && listUsers.map(user => (
            <li key={user.id}> { user.name }
              <button onClick={ () => handleRemoveUser(user) }>APAGAR</button>
            </li>
          ))
        }
      </ul>
      <button type="button" onClick={() => history.push('/new')}>Ir para cadastros</button>
    </>
  );
};

export default Home;
