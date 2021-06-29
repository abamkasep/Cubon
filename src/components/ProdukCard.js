import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {
  ProdukContainer,
  ProdukInfoWrapper,
  ProdukInfo,
  ProdukStok,
  ProdukInputBtn,
  ProdukInputText,
} from '../assets/styles/BerandaStyles';

interface ProdukCardProps {
  stok: string;
  pageTambah: string;
  onPress: () => void;
}
const ProdukCard = ({stok, onPress, pageTambah}: ProdukCardProps) => {
  const navigation = useNavigation();
  // const renderContent = () => (
  //   <TouchableOpacity
  //     onPress={() => sheetRef.current.snapTo(0)}
  //     style={{
  //       backgroundColor: 'white',
  //       height: 140,
  //       borderRadius: 10,
  //       borderWidth: 1,
  //       borderColor: 'orange',
  //       alignItems: 'center',
  //     }}>
  //     <Icon
  //       name="close"
  //       color="grey"
  //       size={20}
  //       style={{top: 5, left: 300, position: 'absolute'}}
  //     />
  //   </TouchableOpacity>
  // );

  const sheetRef = React.useRef(null);

  return (
    <ProdukContainer style={{...styles.shadow}} {...{onPress}}>
      <ProdukInfoWrapper>
        <ProdukInfo>Stok Produk</ProdukInfo>
        <ProdukStok>{stok} Kg</ProdukStok>
      </ProdukInfoWrapper>
      {pageTambah ? (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'orange',
            justifyContent: 'center',
            top: 40,
            left: 60,
            opacity: 0.8,
            ...styles.shadow,
            ...{onPress},
          }}>
          <Text
            style={{
              top: -2,
              fontSize: 30,
              color: 'white',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            +
          </Text>
        </TouchableOpacity>
      ) : (
        <ProdukInputText></ProdukInputText>
      )}
      {/* <BottomSheet
        ref={sheetRef}
        initialSnap={0}
        snapPoints={[0, 70, 140]}
        borderRadius={10}
        renderContent={renderContent}
      /> */}
    </ProdukContainer>
  );
};

export default ProdukCard;

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
