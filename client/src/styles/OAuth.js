import styled from 'styled-components';

const OAuthStyles = styled.div`
  margin-top: 44px;

  p {
    font-size: 13px;
    font-weight: 600;
  }
`;

const OAuthButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;

  a {
    display: flex;
    padding: 8px;
    width: 48%;
    border-radius: 4px;
    border: 1px solid var(--gray-40);
    transition: background-color 0.15s ease-in-out;

    &:hover {
      cursor: pointer;
      background: var(--gray-40);
    }

    &:focus {
      border: 1px solid var(--blue-macos);
    }

    img {
      width: 1.125rem;
      height: 1.125rem;
      margin-right: 16px;
    }
  }
`;

export { OAuthStyles, OAuthButtonsContainer };
