import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProdukCard from '../components/ProdukCard';
import windowWidth from '../utils/SlideHeight';

import dataProduk from '../model/dataProduk';

const AddTransaksi = ({navigation}) => {
  const [transaksiTambah, setTransaksiTambah] = useState('');
  const tambahTransaksi = () => {
    if (transaksiTambah == '') {
      alert('Silahkan masukan jumlah Stok');
      return false;
    } else if (stokTambah == '0') {
      alert('Jumlah stok tidak boleh 0');
      return false;
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fffecf'}}>
      <View style={{height: '8%', backgroundColor: 'white'}}>
        <Icon
          name="chevron-left"
          color="black"
          size={35}
          style={{position: 'absolute', top: 10, left: 10}}
          onPress={() => navigation.goBack()}
        />
        <View style={{alignItems: 'center', top: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>
            Tambah Transaksi
          </Text>
        </View>
      </View>

      <ScrollView
        vertical
        style={{flex: 1, top: 10, backgroundColor: '#ffffff', padding: 20}}>
        <ScrollView horizontal style={{marginBottom: 10, flex: 1}}>
          {dataProduk.map((datasp, _) => {
            return <ProdukCard pageTambah key={_} stok={datasp.stok} />;
          })}
        </ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Produk</Text>
          <Text>Harga pembelian</Text>
        </View>
        <View style={{flex: 1, top: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{top: 10}}> Abon Sapi</Text>
            <TextInput
              value={transaksiTambah}
              onChangeText={transaksiTambah =>
                setTransaksiTambah(transaksiTambah)
              }
              placeholderText="Jumlah stok yang akan ditambahkan"
              placeholderTextColor="#202020"
              keyboardType="number-pad"
              autoCorrect={false}
              style={{
                marginBottom: 20,
                borderWidth: 1,
                borderColor: '#e8e8e8',
                height: 50,
                width: '40%',
                fontSize: 13,
                paddingLeft: 25,
                paddingRight: 20,
                backgroundColor: 'white',
                color: 'black',
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              bottom: 11,
              backgroundColor: 'orange',
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>
              TAMBAH
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddTransaksi;

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
