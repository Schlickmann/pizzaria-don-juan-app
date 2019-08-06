import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { navigate } from '~/services/navigation';
import { Creators as ProductActions } from '~/store/ducks/products';

import Product from '~/components/Product';
import {
  Container,
  ImageHeader,
  ContainerHeader,
  ContainerText,
  HistoricButton,
  CartButton,
  List,
} from './styles';

const Products = ({ productsRequest, products }) => {
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
      <List
        keyboardShouldPersistTaps="handled"
        data={products.data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Product data={item} />}
      />
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
