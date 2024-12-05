import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "../../../redux/store";
import { getProduct } from "../../../redux/slices/product";
import { Box, Icon, Badge } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import MenuBuy from "../../../components/Common/menuBuy";
import toast from 'react-native-toast-message';
import RecommendedProducts from "../../../components/Common/recommendedProducts";
import { productsData } from "../../../dataFake/product";

export default function ProductDetail({ route }: { route: any }) {
    const { productId } = route.params;
    const { product } = useSelector((state: RootState) => state.products);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        dispatch(getProduct(productId));
    }, []);

    if (!product) {
        return (
            <View style={styles.loadingContainer}>
                <Text>Loading product details...</Text>
            </View>
        );
    }

    const formatProductCount = (count: number): string => {
        if (count < 1000) {
            return count.toString();
        } else if (count < 1000000) {
            return (count / 1000).toFixed(1) + 'k'; // Ví dụ: 835.8k
        } else {
            return (count / 1000000).toFixed(1) + 'm'; // Ví dụ: 1.2m
        }
    };

    const handleFavorite = () => {
        if (isFavorite) {
            // dispatch(removeFavorite(productId));
            toast.show({
                text1: "Xóa khỏi danh sách yêu thích",
                type: "success",
            });
        } else {
            // dispatch(addFavorite(productId));
            toast.show({
                text1: "Thêm vào danh sách yêu thích",
                type: "success",
            });
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <MenuBuy />
            <ScrollView style={styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageSlider}>
                    {product.Product_images.map((image: string, index: number) => (
                        <Image key={index} source={{ uri: image }} style={styles.productImage} />
                    ))}
                </ScrollView>

                <Box style={styles.productInfo}>
                    <View style={styles.productNameContainer}>
                        <View>
                            <Text style={styles.productName}>{product.Product_name}</Text>
                            <Text style={styles.productPrice}>{product.Product_price.toLocaleString()} VNĐ</Text>
                        </View>
                        <View style={styles.productSoldContainer}>
                            <Text style={styles.productSold}>Đã bán {formatProductCount(product.Product_count)} sản phẩm</Text>
                            <TouchableOpacity onPress={handleFavorite}>
                                {
                                    isFavorite ?
                                        <Icon as={<MaterialIcons name="favorite" />} size={4} color="red.500" />
                                        :
                                        <Icon as={<MaterialIcons name="favorite-outline" />} size={4} color="gray.500" />
                                }
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.badgesContainer}>
                        {product.Product_isNewArrival && <Badge style={styles.badgeNew}>New Arrival</Badge>}
                        {product.Product_isOnSale && <Badge style={styles.badgeSale}>On Sale</Badge>}
                        {product.Product_isBestSeller && <Badge style={styles.badgeBestSeller}>Best Seller</Badge>}
                    </View>

                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>{product.Product_rating} </Text>
                        <Icon as={<MaterialIcons name="star" />} size={5} color="yellow.500" />
                        <Text style={styles.desRatingText}>Đánh giá sản phẩm (100)</Text>
                    </View>

                    <Text style={styles.sectionTitle}>Description</Text>
                    <Text style={styles.productDescription}>{product.Product_description}</Text>

                    <Text style={styles.sectionTitle}>Specifications</Text>
                    <Text style={styles.productSpecifications}>{product.Product_specifications}</Text>
                </Box>
                <Box style={{ padding: 10, gap: 10 }}>
                    <Box style={styles.title}>
                        <View style={styles.line}></View>
                        <Text>Có thể bạn cũng thích</Text>
                        <View style={styles.line}></View>
                    </Box>
                    <RecommendedProducts productsProps={productsData} />
                </Box>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "transparent",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    productNameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    productSoldContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    productSold: {
        fontSize: 12,
        color: "#666",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageSlider: {
        marginTop: 16,
    },
    productImage: {
        width: 300,
        height: 300,
        resizeMode: "cover",
        marginHorizontal: 10,
        borderRadius: 10,
    },
    productInfo: {
        padding: 16,
    },
    productName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    productPrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FF6347",
        marginVertical: 8,
    },
    badgesContainer: {
        flexDirection: "row",
        marginVertical: 8,
    },
    badgeNew: {
        backgroundColor: "#4caf50",
        color: "#fff",
        marginRight: 8,
        padding: 4,
    },
    badgeSale: {
        backgroundColor: "#FF6347",
        color: "#fff",
        marginRight: 8,
        padding: 4,
    },
    badgeBestSeller: {
        backgroundColor: "#2196f3",
        color: "#fff",
        padding: 4,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },
    ratingText: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 8,
    },
    desRatingText: {
        fontSize: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 8,
    },
    productDescription: {
        fontSize: 14,
        color: "#666",
        marginBottom: 16,
    },
    productSpecifications: {
        fontSize: 14,
        color: "#666",
        marginBottom: 16,
    },
    line: {
        width: 30,
        height: 1,
        backgroundColor: "#ccc",
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
    },
});
