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

import {windowWidth} from '../../utils/Dimentions';

import ProdukCard from '../../components/ProdukCard';
import TransaksiCard from '../../components/TransaksiCard';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 5,
        height: 190,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'orange',
        alignItems: 'center',
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );

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
          <DailyCardWrapper>
            <DailyCard>
              <DailyInfo>Penjualan hari ini</DailyInfo>
              <DailyTransaksi>Rp.1.000.000</DailyTransaksi>
            </DailyCard>

            <InputTransaksiBtn>
              <InputTransaksiText>+ Transaksi</InputTransaksiText>
            </InputTransaksiBtn>
          </DailyCardWrapper>

          <ProdukWrapper>
            <ScrollView horizontal style={{top: -20}}>
              {/* overflow: 'visible' */}
              <ProdukCard stok={10} />
              <ProdukCard stok={3} />
              <ProdukCard stok={5} />
              <ProdukCard stok={1} />
            </ScrollView>
          </ProdukWrapper>

          <TransaksiCard
            idTransaksi={123}
            jumlahTransaksi={1000000}
            onPress={() => {
              sheetRef.current.snapTo(140);
            }}
          />
          <TransaksiCard
            idTransaksi={123}
            jumlahTransaksi={1000000}
            onPress={() => {
              sheetRef.current.snapTo(140);
            }}
          />
          <TransaksiCard idTransaksi={123} jumlahTransaksi={1000000} />
          <TransaksiCard idTransaksi={123} jumlahTransaksi={1000000} />
          <TransaksiCard idTransaksi={123} jumlahTransaksi={1000000} />
          <TransaksiCard idTransaksi={123} jumlahTransaksi={1000000} />

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
        snapPoints={[0, 70, 190]}
        borderRadius={10}
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
});
