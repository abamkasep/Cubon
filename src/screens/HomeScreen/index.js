import * as React from 'react';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {
  Container,
  MonthlyCardWrapper,
  MonthlyCard,
  UserInfo,
  MonthlyTransaksi,
  DailyCardWrapper,
  DailyCard,
  DailyInfo,
  DailyTransaksi,
  InputTransaksiBtn,
  InputTransaksiText,
  ProdukWrapper,
} from '../../assets/styles/BerandaStyles';
import * as Animatable from 'react-native-animatable';

import {windowWidth, windowHeight} from '../../utils/Dimentions';

import ProdukCard from '../../components/ProdukCard';
import TransaksiCard from '../../components/TransaksiCard';
import renderContent from '../../components/BottomSheet';

import dataTransaksi from '../../model/dataTransaksi';
import dataProduk from '../../model/dataProduk';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  const sheetRef = React.useRef(null);
  return (
    <Container>
      <ScrollView vertical style={{flex: 1}}>
        <MonthlyCardWrapper>
          <MonthlyCard>
            <UserInfo>Halo Hennie!</UserInfo>
            <MonthlyTransaksi>
              Penjualan kamu bulan ini yaitu sebesar Rp. 35.000.000, semangat
              terus yaa!
            </MonthlyTransaksi>
          </MonthlyCard>
        </MonthlyCardWrapper>

        <Animatable.View animation="fadeInUpBig">
          <DailyCardWrapper style={{...styles.shadow}}>
            <DailyCard>
              <DailyInfo>Penjualan hari ini</DailyInfo>
              <DailyTransaksi>Rp.1.000.000</DailyTransaksi>
            </DailyCard>

            <InputTransaksiBtn
              onPress={() => navigation.navigate('TambahTransaksi')}>
              <InputTransaksiText>+ Transaksi</InputTransaksiText>
            </InputTransaksiBtn>
          </DailyCardWrapper>

          <ProdukWrapper>
            <ScrollView horizontal style={{top: -20}}>
              {/* overflow: 'visible' */}
              {dataProduk.map((datasp, _) => {
                return (
                  <ProdukCard
                    key={_}
                    stok={datasp.stok}
                    onPress={() => {
                      navigation.navigate('TambahStok', {
                        GetId: datasp.idProduk,
                        GetNamaProduk: datasp.namaProduk,
                        GetStok: datasp.stok,
                      });
                    }}
                  />
                );
              })}
            </ScrollView>
          </ProdukWrapper>

          {dataTransaksi
            .filter((datas, index) => index < 5)
            .sort((a, b) => (b.id > a.id ? 1 : -1))
            .map((datas, index) => {
              return (
                <TransaksiCard
                  key={index}
                  idTransaksi={datas.id}
                  jumlahTransaksi={datas.jumlahPembelian}
                  onPress={() => {
                    navigation.navigate('DetailsScreen', {
                      GetId: datas.id,
                      GetNamaProduk: datas.namaProduk,
                      GetJumlahPembelian: datas.jumlahPembelian,
                    });
                  }}
                />
              );
            })}

          <View
            style={{
              flex: 1,
              width: windowWidth - 40,
              height: 50,
              top: -10,
              marginBottom: 10,
              marginHorizontal: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaksi')}
              style={{
                borderRadius: 8,
                flexDirection: 'row',
              }}>
              <Text style={{color: 'black', fontWeight: 'bold', top: 2}}>
                Lihat semua catatan transaksi
              </Text>
              <Text
                style={{
                  color: 'orange',
                  fontWeight: 'bold',
                  fontSize: 22,
                  top: -4,
                }}>
                {'  '}>
              </Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        initialSnap={0}
        snapPoints={[0, 0, windowHeight - 300]}
        renderContent={renderContent}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffecf',
  },
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
