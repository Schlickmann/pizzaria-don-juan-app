import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ProductButton = styled.TouchableOpacity`
  width: 100%;
`;

export const ProductContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 1,
})`
  margin-top: 15px;
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
