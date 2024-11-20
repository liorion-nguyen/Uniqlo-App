import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Slider = ({data}: {data: any}) => {   
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} />
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={Dimensions.get('window').width - 40}
      itemWidth={Dimensions.get('window').width - 40}
    />
  );
};

const styles = StyleSheet.create({
  slide: { alignItems: 'center', justifyContent: 'center', height: 200 },
  image: { width: '100%', height: 200, borderRadius: 10 },
});

export default Slider;
