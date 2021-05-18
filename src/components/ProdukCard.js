import * as React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  ProdukContainer,
  ProdukInfoWrapper,
  ProdukInfo,
  ProdukStok,
  ProdukInputBtn,
  ProdukInputText,
} from '../assets/styles/BerandaStyles';

const ProdukCard = props => {
  const renderContent = () => (
    <TouchableOpacity
      onPress={() => sheetRef.current.snapTo(0)}
      style={{
        backgroundColor: 'white',
        height: 140,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'orange',
        alignItems: 'center',
      }}>
      <Icon
        name="close"
        color="grey"
        size={20}
        style={{top: 5, left: 300, position: 'absolute'}}
      />
    </TouchableOpacity>
  );

  const sheetRef = React.useRef(null);

  return (
    <ProdukContainer>
      <ProdukInfoWrapper>
        <ProdukInfo>Stok Produk</ProdukInfo>
        <ProdukStok>{props.stok} Kg</ProdukStok>
      </ProdukInfoWrapper>

      <ProdukInputBtn onPress={() => sheetRef.current.snapTo(140)}>
        <ProdukInputText>+ Stok</ProdukInputText>
      </ProdukInputBtn>
      <BottomSheet
        ref={sheetRef}
        initialSnap={0}
        snapPoints={[0, 70, 140]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </ProdukContainer>
  );
};

export default ProdukCard;
