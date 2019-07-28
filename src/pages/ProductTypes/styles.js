import styled from 'styled-components';
import ImgHeader from '~/assets/images/header-background.png';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
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

export const ContainerText = styled.Text`
  margin-top: ${props => `${props.statusBarHeight + 15}px`};
  font-size: 18px;
  font-family: 'Helvetica Bold';
  color: #fff;
`;

export const ProductTypeButton = styled.TouchableOpacity`
  width: 45%;
  margin: 5px;
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
  height: 126px;
  width: 130px;
  margin: 10px;
`;

export const ProductTypeText = styled.Text`
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
`;
