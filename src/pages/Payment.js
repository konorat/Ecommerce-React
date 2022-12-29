import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getItem } from '../services/LocalStorageFuncs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { PaymentArea } from '../css/style';
import { Loading } from '../components/Loading';
import { MdCancel } from 'react-icons/md';

export const Payment = (props) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const acc = getItem('account');

  return (
    <>
      {loading ? (
        <Loading />
      ) : acc.saldo < location.state.price ? (
        <div>
          <span>
            <MdCancel
              style={{ fontSize: '60px', color: 'red', margin: '0px' }}
            />
          </span>
          <p>Seu saldo é insuficiente</p>
        </div>
      ) : (
        <PaymentArea>
          <h2>Sua compra foi concluída com sucesso!</h2>
          <span>
            <AiOutlineCheckCircle />
          </span>

          <h4>Valor: {location.state.price}</h4>
          <h4>Comprador: {acc.user}</h4>
          <h4>{`Prazo: ${Math.ceil(Math.random() * 20) + 1} dias`}</h4>
        </PaymentArea>
      )}
    </>
  );
};
