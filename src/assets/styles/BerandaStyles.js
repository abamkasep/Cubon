import styled from 'styled-components/native';
import {windowWidth} from '../../utils/Dimentions';

export const Container = styled.View`
  flex: 1;
  background-color: #fffecf;
`;

export const MonthlyCardWrapper = styled.View`
  flex: 1;
  width: 100%;
  height: 135px;
  background-color: #beecc4;
`;

export const MonthlyCard = styled.View`
  margin-horizontal: 20px;
  top: 10px;
`;

export const UserInfo = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const MonthlyTransaksi = styled.Text`
  font-size: 16px;
  top: 2px;
`;

export const DailyCardWrapper = styled.View`
  flex: 1;
  width: 90%;
  height: 80px;
  top: -30px;
  margin-horizontal: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  flex-direction: row;
`;

export const DailyCard = styled.View`
  top: 12px;
  left: 14px;
`;

export const DailyInfo = styled.Text`
  color: orange;
  font-weight: bold;
`;

export const DailyTransaksi = styled.Text`
  left: 2px;
  top: 2px;
`;
export const InputTransaksiBtn = styled.TouchableOpacity`
  top: 20px;
  left: 120px;
  width: 110px;
  height: 35px;
  border-width: 1px;
  border-color: orange;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const InputTransaksiText = styled.Text`
  color: orange;
  font-weight: bold;
`;

export const ProdukWrapper = styled.View`
  padding-horizontal: 15px;
`;
export const ProdukContainer = styled.View`
  flex: 1;
  width: 330px;
  height: 140px;
  margin-horizontal: 5px;
  background-color: #ffffff;
  border-radius: 10px;
  flex-direction: row;
`;

export const ProdukInfoWrapper = styled.View`
  top: 12px;
  left: 14px;
`;

export const ProdukInfo = styled.Text`
  color: orange;
  font-weight: bold;
`;

export const ProdukStok = styled.Text`
  left: 2px;
  top: 2px;
`;

export const ProdukInputBtn = styled.TouchableOpacity`
  top: 90px;
  left: 158px;
  width: 80px;
  height: 35px;
  border-width: 1px;
  border-color: orange;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ProdukInputText = styled.Text`
  color: orange;
  font-weight: bold;
`;

export const TransaksiContainer = styled.View`
  flex: 1;
  top: -10px;
  width: 90%;
  height: 80px;
  margin-bottom: 10px;
  margin-horizontal: 20px;
  background-color: white;
  border-radius: 10px;
  flex-direction: row;
`;

export const TransaksiDetail = styled.View`
  top: 12px;
  left: 14px;
`;

export const TransaksiId = styled.Text`
  color: orange;
  font-weight: bold;
`;

export const TransaksiJumlah = styled.Text`
  left: 2px;
  top: 2px;
`;

export const TransaksiDetailBtn = styled.TouchableOpacity`
    top: 20px;
    left: 160px
    width: 80px;
    height: 35px;
    border-width: 1px;
    border-color: orange;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const TransaksiDetailText = styled.Text`
  color: orange;
  font-weight: bold;
`;
