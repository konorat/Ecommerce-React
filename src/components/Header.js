import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea, SearchArea } from '../css/style';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { setItem, getItem } from '../services/LocalStorageFuncs';

export const Header = (props) => {
  const [param, setParam] = useState('');
  const history = useNavigate();

  const handleOnChange = (e) => {
    setParam(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.handleUpdate(param);
    history('/');
  };

  return (
    <HeaderArea>
      <SearchArea onSubmit={handleClick}>
        <input
          type='text'
          name='param'
          onChange={handleOnChange}
          autoComplete='off'
          required
        />
        <label htmlFor='item'>
          <span>Busca!</span>
        </label>
        <button type='submit'>
          <FaSearch />
        </button>
      </SearchArea>
      <Link to='/'>Store</Link>
      <Link to='/cart'>Carrinho</Link>
      {getItem('account') ? (
        <Link to='/profile'>Perfil</Link>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </HeaderArea>
  );
};
