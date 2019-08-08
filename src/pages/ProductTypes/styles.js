import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import ImgHeader from '~/assets/images/header-background.png';

export const Container = styled(LinearGradient).attrs({
  colors: ['#fff', '#d9d9d9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
`;

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

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
