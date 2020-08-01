import React, {useState, useContext} from 'react';
import nprogress from 'nprogress';

import axios from 'axios';
import firebase from 'firebase/app';
import { URL } from '../configs/server_url.config';

import Input from '../components/Input';
import {
  Title,
  StyledButton,
  StyledSignIn,
  FormContainer,
  TermsAndAgreement,
} from '../styles/Signin';

import { CookieContext } from '../utils/context';

export default function SignIn() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const { setCookie } = useContext(CookieContext);

  const handleLogin = event => {
    nprogress.start();
    event.preventDefault();

    axios.post(URL + '/login', {
        email,
        password
    }, { withCredentials: false }).then(res => {
        console.log(res);
        const { data } = res;
        setCookie('user', { idToken: data.token, email: data.user.email }, { sameSite: 'none' });
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        nprogress.done();
    });

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(({ user }) => {
    //     user.getIdToken(true)
    //     .then(idToken => {
    //         const { email } = user;
    //         setCookie('user', { idToken, email }, { sameSite: 'none' });
    //     });
    //   })
    //   .catch(({ message }) => {
    //       setErrMessage(`*${message}`);
    //   }).finally(() => {
    //       nprogress.done();
    //   });
  }

  return (
    <StyledSignIn>
      <div className="container">
        <div className="content-container">
          <div className="logo">icebox admin</div>
          <Title>
            <h2 className="title">Sign in</h2>
          </Title>
          <FormContainer>
            <p style={{ color: 'var(--red-macos)'}}>{errMessage}</p>
            <form>
              <div style={{ marginTop: '44px' }}>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  onChange={event => setemail(event.target.value) }
                  placeholder="Email Address"
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  onChange={event => setPassword(event.target.value) }
                  placeholder="Password"
                  style={{ marginTop: '22px', width: '100%' }}
                />
              </div>
              <TermsAndAgreement>
                <input type="checkbox" name="terms" id="terms" />
                Remember me
              </TermsAndAgreement>
              <div>
                <StyledButton type="submit" onClick={event => handleLogin(event)} >Sign in</StyledButton>
              </div>
            </form>
          </FormContainer>
        </div>
      </div>
    </StyledSignIn>
  );
}
