import styled from 'styled-components';

const StyledSignIn = styled.div`
  height: 100%;
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    .content-container {
      margin-top: -40px;
      width: 360px;
      .logo {
        font-size: 18px;
        font-weight: 300;
      }
    }
  }
`;

const FormContainer = styled.div`
  margin-top: 44px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: ${props => (props.isSignup ? 'column' : 'row')};
  justify-content: space-between;
  margin-top: 88px;
  .title {
    font-size: 31px;
  }
  .extra {
    font-size: 13px;
    display: flex;
    align-items: center;
    a {
      color: var(--blue-macos);
    }
  }
`;

const OutsideLabeledInput = styled.div`
  margin-top: 22px;
  p {
    font-size: 13px;
  }
  input {
    margin-top: 6px;
  }
`;

const InsideLabeledInput = styled.div`
  position: relative;
  a,
  p,
  button {
    color: ${props =>
      // eslint-disable-next-line
      props.strength < 5 ? 'var(--red-macos-20)' : props.strength < 10 ? 'var(--yellow-macos-20)' : 'var(--green-macos-20)'};
    position: absolute;
    font-size: 13px;
    right: 10px;
    top: ${props => (props.isSignup ? '18px' : '33px')};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 44px;
  background-color: var(--blue-macos);
  color: var(--white);
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  &:hover {
    background-color: var(--blue-macos-20);
  }
`;

const StyledInput = styled.input`
  height: 40px;
  padding: 12px;
  outline: none;
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

const TermsAndAgreement = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
  font-size: 13px;
  letter-spacing: 0.6px;
  input {
    margin-right: 15px;
    height: 10px;
    width: 10px;
  }
  a {
    color: var(--blue-macos);
  }
`;

export {
  StyledSignIn,
  Title,
  InsideLabeledInput,
  OutsideLabeledInput,
  StyledButton,
  StyledInput,
  FormContainer,
  TermsAndAgreement,
};
