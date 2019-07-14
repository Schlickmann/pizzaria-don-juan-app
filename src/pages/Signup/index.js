import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { navigate } from '~/services/navigation';
import { Creators as UserActions } from '~/store/ducks/user';
import {
  Container,
  ImageBG,
  KeyboardView,
  FormContainer,
  FormField,
  ImageLogo,
  LoginButton,
  TextButton,
  Spinner,
} from './styles';

const Login = ({ signUpRequest, user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    signUpRequest({ name, email, password });
  }

  function signUp() {
    navigate('Login', { transition: 'SlideFromBottom' });
  }

  return (
    <Container>
      <ImageBG />
      <KeyboardView behavior="padding" enabled>
        <FormContainer>
          <ImageLogo />
          <FormField
            name="name"
            placeholder="Type your full name..."
            value={name}
            onChangeText={value => setName(value)}
          />
          <FormField
            name="email"
            placeholder="Type your email..."
            keyboardType="email-address"
            value={email}
            onChangeText={value => setEmail(value)}
          />
          <FormField
            name="password"
            placeholder="Type your password..."
            secureTextEntry
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <LoginButton onPress={handleSubmit}>
            {user.loading ? <Spinner /> : <TextButton>Sign Up</TextButton>}
          </LoginButton>
          <LoginButton onPress={signUp} link>
            <TextButton link>Already have an account</TextButton>
          </LoginButton>
        </FormContainer>
      </KeyboardView>
    </Container>
  );
};

Login.propTypes = {
  signUpRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({ loading: PropTypes.bool }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
