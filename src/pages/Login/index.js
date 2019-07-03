import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
} from './styles';

const Login = props => (
  <Container>
    <ImageBG />
    <KeyboardView behavior="padding" enabled>
      <FormContainer>
        <ImageLogo />
        <FormField
          name="email"
          placeholder="Type your email..."
          keyboardType="email-address"
          onChangeText={value => props.setUserEmail(value)}
        />
        <FormField
          name="password"
          placeholder="Type your password..."
          secureTextEntry
          onChangeText={value => props.setUserPassword(value)}
        />
        <LoginButton
          onPress={() => props.signInRequest(
            { email: props.user.email, password: props.user.password },
            props.navigation,
          )
          }
        >
          <TextButton>Login</TextButton>
        </LoginButton>
        <LoginButton onPress={() => false} link>
          <TextButton link>Sign Up for free</TextButton>
        </LoginButton>
      </FormContainer>
    </KeyboardView>
  </Container>
);

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
