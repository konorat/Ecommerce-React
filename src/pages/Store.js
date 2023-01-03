import React, { useEffect, useState, useContext } from 'react';
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { ProductsArea } from '../css/style';
import { buscaContext } from '../App';

export const Store = () => {
  const b = useContext(buscaContext) || 'manga berserk';
  console.log(b);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem('carrinho') || []);
  //const [param, setParam] = useState('manga berserk');

  useEffect(() => {
    const fetchApi = async () => {
      //b ? setParam(b) : setParam('manga berserk');
      const url = `https://api.mercadolibre.com/sites/MLB/search?q=${b}`;
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
      console.log(data);
    };
    fetchApi();
    // eslint-disable-next-line
  }, [b]);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem('carrinho', arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem('carrinho', [...cart, obj]);
    }
  };

  return (
    <div>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt='' />
            <h4>R$ {e.price}</h4>
            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
    </div>
  );
};
