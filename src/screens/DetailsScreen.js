import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import windowWidth from '../utils/SlideHeight';
import {LineDivider, SectionLineDivider} from '../utils/LineDivider';

const DetailsScreen = ({route, navigation}) => {
  const {GetId, GetNamaProduk, GetJumlahPembelian} = route.params;
  const kiloan = JSON.stringify(GetJumlahPembelian) / 300000;
  const pendapatan = JSON.stringify(GetJumlahPembelian) * 0.1;
  const [stokTambah, setStokTambah] = useState();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: '8%', backgroundColor: '#fffecf'}}>
        <Icon
          name="close"
          color="black"
          size={35}
          style={{position: 'absolute', top: 10, left: 10}}
          onPress={() => navigation.goBack()}
        />
        <View style={{alignItems: 'center', top: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Detail Transaksi
          </Text>
        </View>
      </View>
      <ScrollView vertical style={{flex: 1}}>
        <View
          style={{
            height: 150,
            backgroundColor: '#fffecf',
            padding: 20,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <View style={{flex: 1, top: 10, flexDirection: 'row'}}>
            <View style={{flex: 0.4, justifyContent: 'center', top: -10}}>
              <Icon
                name="clipboard-check"
                color="black"
                size={100}
                style={{position: 'absolute', top: 10, left: 10}}
              />
            </View>
            <View style={{flex: 0.6, top: 10, left: -10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Transaksi Berhasil
              </Text>
              <Text>Yeah! Pendapatanmu bertambah sebanyak Rp{pendapatan}</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1, padding: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Detail Transaksi
            </Text>
            {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              idt {JSON.stringify(GetId)}
            </Text> */}
          </View>
          <LineDivider />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1}}>{JSON.stringify(GetNamaProduk)}</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>{kiloan} Kg</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>
              Rp {JSON.stringify(GetJumlahPembelian)}
            </Text>
          </View>
          <LineDivider />
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{flex: 1, fontWeight: 'bold'}}>Total</Text>
            <Text style={{flex: 1, textAlign: 'right'}}>
              Rp {JSON.stringify(GetJumlahPembelian)}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
