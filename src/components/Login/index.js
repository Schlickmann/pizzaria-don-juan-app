import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '~/store/ducks/user';

import {
  Container, ImageBG, FormContainer, FormField, ImageLogo,
} from './styles';

const Login = ({ user }) => (
  <Container>
    <ImageBG />
    <FormContainer>
      <ImageLogo />
      <FormField name="email" placeholder="Type your email..." keyboardType="email-address" />
      <FormField name="password" placeholder="Type your password..." />
    </FormContainer>
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
