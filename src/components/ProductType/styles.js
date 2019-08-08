import styled from 'styled-components/native';

export const ProductTypeButton = styled.TouchableOpacity`
  width: 50%;
  margin: 3px;
  flex-grow: 1;
  flex-basis: 0;
`;

export const ProductTypeContainer = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 3,
  elevation: 1,
})`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ProductTypeImage = styled.Image.attrs(props => ({
  source: { uri: props.imageUrl },
}))`
  height: 120px;
  width: 120px;
  margin: 10px;
`;

export const ProductTypeText = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
  padding: 5px;
`;
