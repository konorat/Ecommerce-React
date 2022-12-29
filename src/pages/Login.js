import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItem, getItem } from '../services/LocalStorageFuncs';

export const Login = (props) => {
  if (getItem('account')) {
    var acc = getItem('account');
  } else {
    var acc = '';
  }

  const [user, setUser] = useState(acc.user || '');
  const [pass, setPass] = useState(acc.pass || '');
  const [passIncorrect, setPassIncorrect] = useState(false);

  const history = useNavigate();

  const cond = user.length > 3 && pass.length > 5;

  const saveUser = (user, pass) => {
    if (user === acc.user && pass === acc.pass) {
      history('/');
    } else if (user === acc.user && pass !== user.pass) {
      setPassIncorrect(true);
    } else {
      setItem('account', { user, pass });
      history('/');
    }
  };

  return (
    <div>
      <p>Usuário</p>
      <input
        type='text'
        onChange={({ target: { value } }) => setUser(value)}
        value={user}
      />
      <p>Senha</p>
      <input
        type='password'
        onChange={({ target: { value } }) => setPass(value)}
        value={pass}
      />
      {passIncorrect && <p>Senha incorreta!</p>}
      <br />
      <br />
      <button
        type='button'
        onClick={() => saveUser(user, pass)}
        disabled={!cond}
      >
        Entrar
      </button>
    </div>
  );
};
