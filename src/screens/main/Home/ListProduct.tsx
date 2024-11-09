import { Box } from "native-base";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";

export default function ListProduct() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Product 1",
      price: 100000,
      image: "https://down-vn.img.susercontent.com/file/32a7af196f0974b250d4a763ea04a512",
      description: "Description of product 1",
    },
    {
      id: 2,
      title: "Product 2",
      price: 200000,
      image: "https://down-vn.img.susercontent.com/file/32a7af196f0974b250d4a763ea04a512",
      description: "Description of product 2",
    },
    {
      id: 3,
      title: "Product 3",
      price: 300000,
      image: "https://down-vn.img.susercontent.com/file/32a7af196f0974b250d4a763ea04a512",
      description: "Description of product 3",
    },
  ]);
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Box style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Box>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price} VNĐ</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Box>
        </Box>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    gap: 30
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: "green",
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
});
