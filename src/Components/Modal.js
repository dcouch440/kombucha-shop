import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalDisplay = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00000073;
  color: whitesmoke;
`;

const Message = styled.div`
  position: relative;
  width: 60%;
  height: 60%;
  font-size: 40px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 20px solid white;
  border-radius: 20px;
  padding: 15px;
  .icon {
    position: absolute;
    align-self: flex-end;
    padding: 50px;
    font-size: 250px;
    text-decoration: underline;
  }
  @media (max-width: 1200px)
  {
    display: flex;
    font-size: 30px;
    .icon {
      bottom: 5px;
      font-size: 100px;
    }
  }
`;

const CloseButton = styled.button`
  font-family: arial !important;
  font-weight: 100;
  position: absolute;
  all: unset;
  cursor: pointer;
  color: white;
  position: absolute;
  right: 2%;
  color: white;
  top: 5%;
  padding: 10px;
  border: 2px solid white;
  font-size: 25px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const StockChange = styled.button`
  font-family: arial !important;
  font-weight: 100;
  position: absolute;
  all: unset;
  cursor: pointer;
  color: white;
  position: absolute;
  right: 10%;
  top: 5%;
  border: 2px solid white;
  color: white;
  padding: 15px;
  font-size: 17px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Modal = ({drink, onClick, stockRemoval}) => {

  const handleStockRemoval = (e) => {
    stockRemoval(drink.id)
  };

  const buttonText = drink.stock === 0 ? 'Out Of Stock' : 'Remove Stock';

  return (
    <ModalDisplay>
      <Message>
        <div>Name: {drink.name}</div>
        <div>Flavor: {drink.flavor}</div>
        <div>Smell: {drink.smell}</div>
        <div>Ingredients: {drink.ingredients}</div>
        <div>Current Stock: {drink.stock}</div>
        <div className="icon">💃</div>
        <StockChange onClick={handleStockRemoval}>{buttonText}</StockChange>
        <CloseButton onClick={onClick}>x</CloseButton>
      </Message>
    </ModalDisplay>
  );
}

Modal.propTypes = {
  drink: PropTypes.object,
  onClick: PropTypes.func,
  stockRemoval: PropTypes.func
};

export default Modal;