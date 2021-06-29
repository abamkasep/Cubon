import React from 'react';
import {StyleSheet} from 'react-native';
import {
  TransaksiContainer,
  TransaksiDetail,
  TransaksiId,
  TransaksiJumlah,
  TransaksiDetailBtn,
  TransaksiDetailText,
} from '../assets/styles/BerandaStyles';

interface TransaksiCardProps {
  idTransaksi: string;
  jumlahTransaksi: string;
  onPress: () => void;
}
const TransaksiCard = ({
  idTransaksi,
  jumlahTransaksi,
  onPress,
}: TransaksiCardProps) => {
  return (
    <TransaksiContainer style={{...styles.shadow}}>
      <TransaksiDetail>
        <TransaksiId>Transaksi: {idTransaksi}</TransaksiId>
        <TransaksiJumlah>Rp. {jumlahTransaksi}</TransaksiJumlah>
      </TransaksiDetail>

      <TransaksiDetailBtn {...{onPress}}>
        <TransaksiDetailText>Details</TransaksiDetailText>
      </TransaksiDetailBtn>
    </TransaksiContainer>
  );
};

export default TransaksiCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
