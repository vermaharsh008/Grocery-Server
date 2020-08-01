import styled from 'styled-components';
import search from '../images/search.svg';

const MainStyles = styled.div`
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const MainGridContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(40px, 1fr) 6fr;
    padding: 20px;
`;

const LinksContainer = styled.div`
    display: flex;
    margin-top: 40px;
    justify-content: center;
    a {
      font-size: 16px;
      font-weight: 600;
      color: var(--blue-macos);
      text-decoration: none;
      transition: box-shadow 180ms ease-in-out;
      &:hover {
        color: var(--black-20);
        box-shadow: 0px -64px 0px 0px #f8f8f8 inset;
      }
    }
`;


const ListGridContainer = styled.div`
    display: grid;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 4px;
    background: var(--white);
    ul {
        display: grid;
        grid-template-columns: .5fr 2fr repeat(2, 1fr) minmax(24px, 1fr);
        list-style-type: none;
    }
`;

const SearchButton = styled.button`
  background-image: url(${search});
  height: 24px;
  width: 24px;
  margin-top: -25px;
  border: none;
`;

const SelectStyles = styled.select`
  height: 40px;
  padding: 12px;
  outline: none;
  background: var(--white);
  border: 1px solid var(--gray-40);
  border-radius: 4px;
  font-size: 18px;
  font-weight: 300;
  &:hover {
    border: 1px solid var(--gray-60);
  }
  &:focus {
    border: 1px solid var(--blue-macos);
  }
`;

const HeaderContainer = styled.div`
  margin-top: 22px;
  padding: 11px 44px;
  border: 1px solid var(--gray-40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  ul li {
        display: flex;
        align-items: center;
        font-size: 14px;
        text-transform: uppercase;
   }
`;

const ListContainer = styled.div`
  div {
    border-bottom: 1px solid var(--gray-40);
  }
`;

const UserRowStyles = styled.div`
    padding: 11px 44px;
    font-size: 14px;

    a {
        text-decoration: underline;
    }

    li {
        display: flex;
        align-items: center;
        padding: 0 4px;
    }
/*
    li:nth-child(5) {
        justify-content: flex-end;
    } */
`;

export { MainStyles, MainGridContainer, LinksContainer, ListGridContainer, SearchButton, HeaderContainer, ListContainer, UserRowStyles, SelectStyles };
