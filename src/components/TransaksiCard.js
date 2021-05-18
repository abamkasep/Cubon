import React from 'react';
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
    <TransaksiContainer>
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
