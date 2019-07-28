import styled from 'styled-components';
import ImgHeader from '~/assets/images/header-background.png';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})``;

export const ImageHeader = styled.Image.attrs({
  source: ImgHeader,
})`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const HistoricButton = styled.TouchableOpacity`
  margin-top: ${props => `${props.statusBarHeight + 15}px`};
`;

export const ContainerText = styled.Text`
  margin-top: ${props => `${props.statusBarHeight + 15}px`};
  font-size: 18px;
  font-family: 'Helvetica Bold';
  color: #fff;
`;

export const CartButton = styled.TouchableOpacity`
  margin-top: ${props => `${props.statusBarHeight + 15}px`};
  padding: 10px;
  background: #e5283e;
  border-radius: 50;
`;

export const ProductButton = styled.TouchableOpacity``;

export const ProductContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 1,
})`
  margin-top: 15px;
  width: 85%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  padding-right: 20px;
  margin-top: 15px;
  width: 70%;
`;

export const ProductText = styled.Text`
  color: ${props => (props.description || props.cook_time ? '#706e7b' : '#0b2031')};
  margin-bottom: ${props => (props.cook_time ? '0' : '5px')};
  font-size: ${(props) => {
    if (props.description) {
      return '11px';
    }
    if (props.cook_time) {
      return '10px';
    }
    return '12px';
  }};
  text-align: left;
  letter-spacing: ${props => (props.cook_time ? '0.5px' : '0')};
  line-height: 14px;
`;

export const CookContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ProductImage = styled.Image.attrs(props => ({
  source: { uri: props.imageUrl },
}))`
  height: 79px;
  width: 79px;
  margin: 10px;
  border-radius: 5px;
`;
