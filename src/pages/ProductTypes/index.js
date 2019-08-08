import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStatusBarHeight } from 'react-native-status-bar-height';
// import { navigate } from '~/services/navigation';
import { Creators as ProductTypeActions } from '~/store/ducks/productTypes';

import ProductType from '~/components/ProductType';

import {
  Container, ImageHeader, ContainerHeader, ContainerText, List,
} from './styles';

const ProductTypes = ({ productTypesRequest, productTypes }) => {
  const statusBarHeight = getStatusBarHeight();
  useEffect(() => {
    productTypesRequest();
  }, []);

  // function selectProductSize(id) {
  //   navigate('ProductSizes', { transition: 'SlideFromBottom', productTypeId: id });
  // }

  return (
    <Container>
      <ImageHeader />
      <ContainerHeader>
        <ContainerText statusBarHeight={statusBarHeight}>Select an option</ContainerText>
      </ContainerHeader>

      <List
        keyboardShouldPersistTaps="handled"
        data={productTypes.data}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({ item }) => <ProductType data={item} />}
      />
    </Container>
  );
};

ProductTypes.propTypes = {
  productTypesRequest: PropTypes.func.isRequired,
  productTypes: PropTypes.shape({ loading: PropTypes.bool }).isRequired,
};

const mapStateToProps = state => ({
  productTypes: state.productTypes,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductTypeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductTypes);
