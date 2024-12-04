import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Column, ScrollView } from "native-base";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParams } from "../../../navigations/config";
import Header from "../../../components/Main/Home/header";
import Slider from "../../../components/Common/slider";
import Category from "../../../components/Main/Home/category";
import { dispatch } from "../../../redux/store";
import { getCategory } from "../../../redux/slices/category";
import FlashSale from "../../../components/Main/Home/flashSalse";
import { getProducts } from "../../../redux/slices/product";
type Props = {} & StackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation }: Props) => {
  const data = [
    { title: 'Slide 1', image: 'https://via.placeholder.com/300' },
    { title: 'Slide 2', image: 'https://via.placeholder.com/300' },
    { title: 'Slide 3', image: 'https://via.placeholder.com/300' },
  ];  
  useEffect(() => {
    const fetchCategory = async () => {
      await dispatch(getCategory());
      await dispatch(getProducts());
    };
    fetchCategory();
  }, []);
  return (
    <Column flex="1" bg="coolGray.700" safeAreaTop style={{ padding: 20 }}>
      <ScrollView flexGrow={1} style={{ flexDirection: "column", gap: 20 }}>
        <Header />
        <Slider data={data} />
        <Category />
        <FlashSale />
      </ScrollView>
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({});
