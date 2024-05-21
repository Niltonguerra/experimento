import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, Image,View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from "./HomeScreen.styles";
import "../../../assets/styles/base/variables";
import { themePadrao } from '../../../assets/styles/base/variables';


const DATA = [
  {
    id: 'b',
    title: 'First Item',
    imagem: require('../../../assets/images/habibs.png')
  },
  {
    id: '3',
    title: 'Second Item',
    imagem: require('../../../assets/images/subway.png')
  },
  {
    id: '5',
    title: 'Third Item',
    imagem: require('../../../assets/images/mcdonalds.png')
  },
  {
    id: 'd53abb28ba',
    title: 'First Item',
    imagem: require('../../../assets/images/habibs.png')
  },
  {
    id: '3ac68',
    title: 'Second Item',
    imagem: require('../../../assets/images/subway.png')
  },
  {
    id: '58694a0571e29d72',
    title: 'Third Item',
    imagem: require('../../../assets/images/mcdonalds.png')
  },
  {
    id: 'bdd5-3ad53abb28ba',
    title: 'First Item',
    imagem: require('../../../assets/images/habibs.png')
  },
  {
    id: '3ac68afc-c605-aa97f63',
    title: 'Second Item',
    imagem: require('../../../assets/images/subway.png')
  },
  {
    id: '58694a0f-571e29d72',
    title: 'Third Item',
    imagem: require('../../../assets/images/mcdonalds.png')
  },
  {
    id: 'bd7c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    imagem: require('../../../assets/images/habibs.png')
  },
  {
    id: '3ac6c-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    imagem: require('../../../assets/images/subway.png')
  },
  {
    id: '58694a0f-3dabd96-145571e29d72',
    title: 'Third Item',
    imagem: require('../../../assets/images/mcdonalds.png')
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} 
  style={[styles.item, { backgroundColor }]}
  >

    <View style={styles.container}>
      
      
      <Image
        source={item.imagem}
        style={styles.image}
      />

      <Text style={styles.titulo}>
        {item.title}
      </Text>


      <Icon name="right" style={styles.icon} size={20} color="black" />

    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? themePadrao.colors.secondary : themePadrao.colors.primary;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView >
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



export default HomeScreen;
