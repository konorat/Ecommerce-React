import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../services/LocalStorageFuncs';

export const ProfileEdit = () => {
  const acc = getItem('account');
  const [user, setUser] = useState(acc.user || '');
  const [pass, setPass] = useState(acc.pass || '');
  const [email, setEmail] = useState(acc.email || '');
  const [img, setImg] = useState(acc.img || '');
  const [cpf, setCpf] = useState(acc.cpf || '');
  const [saldo, setSaldo] = useState(acc.saldo || '');

  const history = useNavigate();

  const cond =
    user.length > 3 &&
    email.includes('@') &&
    email.length > 8 &&
    pass.length > 5 &&
    img.length > 4 &&
    cpf.length === 11 &&
    saldo.length > 2;

  const saveUser = () => {
    setItem('account', { user, pass, email, img, cpf, saldo });
    history('/profile');
  };

  return (
    <div>
      <p>Nome</p>
      <input
        type='text'
        value={user}
        onChange={({ target: { value } }) => setUser(value)}
      />
      <p>Senha</p>
      <input
        type='password'
        value={pass}
        onChange={({ target: { value } }) => setPass(value)}
      />
      <p>E-mail</p>
      <input
        type='email'
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <p>Imagem URL</p>
      <input
        type='text'
        value={img}
        onChange={({ target: { value } }) => setImg(value)}
      />
      <p>CPF</p>
      <input
        type='number'
        value={cpf}
        onChange={({ target: { value } }) => setCpf(value)}
      />
      <p>Saldo</p>
      <input
        type='number'
        value={saldo}
        onChange={({ target: { value } }) => setSaldo(value)}
      />
      <br />
      <button
        onClick={saveUser}
        disabled={!cond}
      >
        Atualizar
      </button>
    </div>
  );
};
