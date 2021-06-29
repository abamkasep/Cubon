import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import ProdukCard from '../components/ProdukCard';
import windowWidth from '../utils/SlideHeight';

const AddStok = ({route, navigation}) => {
  const [stokTambah, setStokTambah] = useState('');
  const {GetId, GetNamaProduk, GetStok} = route.params;
  const tambahStokProduk = () => {
    if (stokTambah == '') {
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
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Tambah Stok</Text>
        </View>
      </View>
      <View style={{flex: 1, top: 10, backgroundColor: '#ffffff', padding: 20}}>
        <View style={{height: 150, width: 330, marginBottom: 10}}>
          <ProdukCard pageeTransaksi stok={GetStok} />
        </View>
        <Text>JUMLAH STOK</Text>
        <View style={{top: 10}}>
          <TextInput
            value={stokTambah}
            onChangeText={stokProduk => setStokTambah(stokProduk)}
            placeholderText="Jumlah stok yang akan ditambahkan"
            placeholderTextColor="#202020"
            keyboardType="number-pad"
            autoCorrect={false}
            style={{
              marginBottom: 20,
              borderWidth: 1,
              borderColor: '#e8e8e8',
              height: 50,
              fontSize: 13,
              paddingLeft: 25,
              paddingRight: 20,
              backgroundColor: 'white',
              color: 'black',
            }}
          />
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
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
      </View>
    </View>
  );
};

export default AddStok;
