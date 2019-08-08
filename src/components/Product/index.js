import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigate } from '~/services/navigation';
import { Creators as ProductActions } from '~/store/ducks/products';

import {
  ProductButton,
  ProductContainer,
  TextContainer,
  ProductText,
  CookContainer,
  ProductImage,
} from './styles';

function Product({ data, productsSelected }) {
  return (
    <ProductButton onPress={() => productsSelected(data.id)}>
      <ProductContainer>
        <ProductImage imageUrl={`${data.image}`} />
        <TextContainer>
          <ProductText>{data.name}</ProductText>
          <ProductText description>{data.description}</ProductText>
          <CookContainer>
            <Icon name="alarm" color="#c3c3c3" size={14} style={{ marginRight: 5 }} />
            <ProductText cook_time>{data.cook_time}</ProductText>
          </CookContainer>
        </TextContainer>
      </ProductContainer>
    </ProductButton>
  );
}

Product.propTypes = {};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
