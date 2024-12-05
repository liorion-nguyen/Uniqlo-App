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
import ListCategories from "../../../components/Main/Home/listCategories";
import Product from "../../../components/Main/Home/product";
type Props = {} & StackScreenProps<HomeStackParams, "Home">;

const Home = ({ navigation }: Props) => {
  const data = [
    { title: 'Slide 1', image: 'https://uniqlo-staging.vercel.app/assets/banner-3-D92opz_J.jpg' },
    { title: 'Slide 2', image: 'https://uniqlo-staging.vercel.app/assets/banner-2-nlONFt-e.jpg' },
    { title: 'Slide 3', image: 'https://uniqlo-staging.vercel.app/assets/banner-1-B0fCuvpl.jpg' },
  ];  
  useEffect(() => {
    const fetchCategory = async () => {
      await dispatch(getCategory());
      await dispatch(getProducts());
    };
    fetchCategory();
  }, []);
  return (
    <Column flex="1" bg="coolGray.700" safeAreaTop style={styles.container}>
      <ScrollView flexGrow={1} style={styles.scrollView}>
        <Header />
        <Slider data={data} />
        <ListCategories />
        <FlashSale />
        <Category />
        <Product />
      </ScrollView>
    </Column>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  scrollView: {
    flexDirection: "column",
    gap: 30
  }
});
