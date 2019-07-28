import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { navigate } from '~/services/navigation';
import { Creators as ProductActions } from '~/store/ducks/products';

import {
  Container,
  ImageHeader,
  ContainerHeader,
  ContainerText,
  HistoricButton,
  CartButton,
  ProductButton,
  ProductContainer,
  TextContainer,
  ProductText,
  CookContainer,
  ProductImage,
} from './styles';

const Products = ({ productsRequest, productsSelected, products }) => {
  const statusBarHeight = getStatusBarHeight();
  useEffect(() => {
    productsRequest();
  }, []);

  return (
    <Container>
      <ImageHeader />
      <ContainerHeader>
        <HistoricButton statusBarHeight={statusBarHeight}>
          <Icon name="history" color="#fff" size={24} />
        </HistoricButton>
        <ContainerText statusBarHeight={statusBarHeight}>Pizzaria Don Juan</ContainerText>
        <CartButton statusBarHeight={statusBarHeight}>
          <Icon name="shopping-basket" color="#fff" size={20} />
        </CartButton>
      </ContainerHeader>
      {products.data.map(product => (
        <ProductButton key={product.id} onPress={() => productsSelected(product.id)}>
          <ProductContainer>
            <ProductImage imageUrl={`${product.image}`} />
            <TextContainer>
              <ProductText>{product.name}</ProductText>
              <ProductText description>{product.description}</ProductText>
              <CookContainer>
                <Icon name="alarm" color="#c3c3c3" size={14} style={{ marginRight: 5 }} />
                <ProductText cook_time>{product.cook_time}</ProductText>
              </CookContainer>
            </TextContainer>
          </ProductContainer>
        </ProductButton>
      ))}
    </Container>
  );
};

Products.propTypes = {
  productsRequest: PropTypes.func.isRequired,
  productsSelected: PropTypes.func.isRequired,
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
