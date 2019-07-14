import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Creators as ProductActions } from '~/store/ducks/products';

import { Container, ImageHeader, ContainerText } from './styles';

const Products = ({ productsRequest }) => {
  const statusBarHeight = getStatusBarHeight();
  useEffect(() => {
    productsRequest();
  }, []);

  return (
    <Container>
      <ImageHeader />
      <ContainerText statusBarHeight={statusBarHeight}>Juliani</ContainerText>
    </Container>
  );
};

Products.propTypes = {
  productsRequest: PropTypes.func.isRequired,
  products: PropTypes.shape({ loading: PropTypes.bool }).isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);
