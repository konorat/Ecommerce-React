import styled, { keyframes } from 'styled-components';

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  div {
    height: 320px;
    width: 230px;
    border: 3px solid rgb(194, 193, 193);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  button {
    font-size: 30px;
    background: transparent;
    border: none;
    color: black;

    &:hover {
      color: #e9a214;
    }
  }
`;
export const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: black;
  padding: 20px;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
      color: #e9a214;
    }
  }
`;

export const SearchArea = styled.form`
  overflow: hidden;
  position: relative;
  width: 15%;
  height: 40px;

  button {
    background-color: #4f4f4f;
    height: 30px;
    width: 30px;
    font-size: 23px;
    z-index: 1;
    color: #e9a214;
    position: absolute;
    float: right;
    top: 6px;
    right: 3%;
    align-self: center;
    border: none;
    border-radius: 5px;

    &:hover {
      color: white;
    }
  }

  input {
    color: #fff;
    font-size: 16px;
    width: 100%;
    height: 100%;
    //padding: 20px 5px 5px;
    background-color: #4f4f4f;
    border: none;
    border-radius: 4px;
  }

  label {
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid #ffffff;
  }

  span {
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  label::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #e9a214;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  input:focus + label span,
  input:valid + label span {
    transform: translateY(-90%);
    font-size: 10px;
    bottom: 10px;
    color: #e9a214;
  }

  input:focus + label::after,
  input:valid + label::after {
    transform: translateX(0%);
  }
`;

export const frames = keyframes`
  0% {
    height: 10em;
  }

  50% {
    height: 5em;
  }

  100% {
    height: 10em;
  }
`;

export const LoadContainer = styled.div`
  background-color: black;
  height: 97.8vh;
  width: 100vm;
  margin-top: -70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  div {
    background-color: white;
    height: 10em;
    width: 2em;
    animation: ${frames} 1.5s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

export const PaymentArea = styled.div`
  span {
    font-size: 100px;
    color: green;
    margin: 0;
  }
`;
