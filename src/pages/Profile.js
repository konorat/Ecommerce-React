import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem, removeItem } from '../services/LocalStorageFuncs';

export const Profile = (props) => {
  const user = getItem('account');

  const history = useNavigate();

  const toProfileEdit = () => {
    history('/profile/edit');
  };

  const loggout = () => {
    removeItem('account');
    history('/');
  };

  return (
    <div>
      <p>Usuário: {user.user}</p>
      <p>E-mail: {user.email}</p>
      <img style={{ height: '300px' }} src={user.img} alt='img error' />
      <p>CPF: {user.cpf}</p>
      <p>Saldo: R$ {user.saldo}</p>
      <button onClick={toProfileEdit}>Editar Perfil</button>
      <br />
      <br />
      <button onClick={loggout}>Loggout</button>
    </div>
  );
};
