import styled from 'styled-components';

const NavStyles = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  height: 64px;
  align-items: center;
  text-indent: 0;
  background: var(--white);
  > ul {
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: space-between;
    > li a {
      display: flex;
      padding: 25.5px 15px;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      transition: box-shadow 180ms ease-in-out;
      &:hover {
        color: var(--black-20);
        box-shadow: 0px -64px 0px 0px var(--white) inset;
      }
    }
  }
`;

export { NavStyles };
