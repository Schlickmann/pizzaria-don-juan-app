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

export const ContainerText = styled.Text`
  padding-top: ${props => `${props.statusBarHeight + 15}px`};
  font-size: 18px;
  font-family: 'Helvetica Bold';
  color: #fff;
`;
