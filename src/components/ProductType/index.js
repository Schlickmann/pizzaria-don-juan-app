import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductTypeActions } from '~/store/ducks/productTypes';

import {
  ProductTypeButton,
  ProductTypeContainer,
  ProductTypeImage,
  ProductTypeText,
} from './styles';

function ProductType({ data, productTypesSelected }) {
  return (
    <ProductTypeButton onPress={() => productTypesSelected(data.id)}>
      <ProductTypeContainer>
        <ProductTypeImage imageUrl={`${data.image}`} />
        <ProductTypeText>{data.name}</ProductTypeText>
      </ProductTypeContainer>
    </ProductTypeButton>
  );
}

ProductType.propTypes = {};

const mapStateToProps = state => ({
  productTypes: state.productTypes,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductTypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductType);
