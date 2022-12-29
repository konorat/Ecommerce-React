import React, { useState } from 'react';
import { getItem, setItem } from '../services/LocalStorageFuncs';
import { BsFillCartDashFill } from 'react-icons/bs';
import { ProductsArea } from '../css/style';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const [data, setData] = useState(getItem('carrinho') || []);

  const history = useNavigate();

  const removeItem = (obj) => {
    const arrFilter = data.filter((e) => e.id !== obj.id);
    setData(arrFilter);
    setItem('carrinho', arrFilter);
  };

  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  const handleClick = () => {
    history('/payment', { state: { price: subTotal } });
    setItem('carrinho', []);
  };

  return (
    <div>
      <h3>{`Subtotal: R$ ${subTotal}`}</h3>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt={e.title} />
            <h4>R$ {e.price}</h4>
            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
      <button disabled={!subTotal > 0} onClick={handleClick}>
        Comprar
      </button>
    </div>
  );
};
