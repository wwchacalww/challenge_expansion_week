import styled from 'styled-components';

import logoChacal from '../../assets/logoChacal.svg';

export const Container = styled.div`
  width: 1120px;

`;

export const Header = styled.div`
  background: url(${logoChacal}) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 168px;
`;

export const Content = styled.div`
  margin-top: 24px;
  width: 100%;
  padding: 64px 40px 64px 40px;
  background: #28ADF5;
  border-radius: 16px;
  height: 100%;

  div {
    width: 992;
    background: #fff;
    padding: 32px;
    border-radius: 16px;

    img {
      position: absolute;
      height: 225px;
      width: 233px;
      transform: translateY(-210%) translateX(600px);
    }
  }
`;

export const PensamentoCriticoStyle = styled.div`
  width: 992;
  margin-top: 36px;
  padding: 32px;
  border-radius: 16px;

  img {
      position: absolute;
      height: 225px;
      width: 233px;
      transform: translateY(-210%) translateX(600px);
    }
`;
