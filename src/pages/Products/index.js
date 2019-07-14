import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductActions } from '~/store/ducks/products';

const Products = ({ productsRequest }) => {
  useEffect(() => {
    productsRequest();
  }, []);

  return (
    <View>
      <Text> prop </Text>
    </View>
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
