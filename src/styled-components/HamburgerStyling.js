import styled from 'styled-components/macro'

export const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  left: 1.0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 2rem;
  background: rgb(253,253,253, 0.3);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0;
  z-index: 1;
  &:focus {
    outline: none;
  };

  div {
    width: 2rem;
    height: 0.25rem;
    margin-left: 0.45rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#000')};
    background-color: rgb(136,225,239);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 1024px) {
      display: none;
  };
`
export const StyledMenu = styled.nav`
  display: flex;
  z-index: 5;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(253,253,253, 0.5);
  backdrop-filter: blur(10px);
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  height: 100vh;
  width: 100vw;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.8s ease-in-out;

  @media (min-width: 1024px) {
      display: none;
    };
  
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    };
    &:hover {
      color: #0d335d;
    };
  };
`;

export const BurgerButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content:center;
  text-align: center;
  background-color: rgb(253,253,253, 0);
  height: 50px;
  border-radius: 20px;
  padding: 10px;
  margin-bottom:40px;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 20px;
  color: rgb(240,96,122);
  border: none;
    &:hover {
      background: rgb(63,177,181);
      color: rgb(253,253,253);
      border-radius: 10px;
      cursor: pointer
    }
`;