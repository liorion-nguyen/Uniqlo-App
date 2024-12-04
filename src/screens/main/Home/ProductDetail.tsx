import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "../../../redux/store";
import { getProduct } from "../../../redux/slices/product";
import { Box, Icon, Badge } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function ProductDetail({ route }: { route: any }) {
    const { productId } = route.params;
    const { product } = useSelector((state: RootState) => state.products);

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

    return (
        <ScrollView style={styles.container}>
            {/* Product Images */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageSlider}>
                {product.Product_images.map((image: string, index: number) => (
                    <Image key={index} source={{ uri: image }} style={styles.productImage} />
                ))}
            </ScrollView>

            {/* Product Info */}
            <Box style={styles.productInfo}>
                <Text style={styles.productName}>{product.Product_name}</Text>
                <Text style={styles.productPrice}>${product.Product_price.toFixed(2)}</Text>

                {/* Badges */}
                <View style={styles.badgesContainer}>
                    {product.Product_isNewArrival && <Badge style={styles.badgeNew}>New Arrival</Badge>}
                    {product.Product_isOnSale && <Badge style={styles.badgeSale}>On Sale</Badge>}
                    {product.Product_isBestSeller && <Badge style={styles.badgeBestSeller}>Best Seller</Badge>}
                </View>

                {/* Product Rating */}
                <View style={styles.ratingContainer}>
                    <Icon as={<MaterialIcons name="star" />} size={5} color="yellow.500" />
                    <Text style={styles.ratingText}>{product.Product_rating} / 5.0</Text>
                </View>

                {/* Product Description */}
                <Text style={styles.sectionTitle}>Description</Text>
                <Text style={styles.productDescription}>{product.Product_description}</Text>

                {/* Product Specifications */}
                <Text style={styles.sectionTitle}>Specifications</Text>
                <Text style={styles.productSpecifications}>{product.Product_specifications}</Text>

                {/* Product Details */}
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>
                        <Text style={styles.detailLabel}>Color: </Text>
                        {product.Product_color}
                    </Text>
                    <Text style={styles.detailText}>
                        <Text style={styles.detailLabel}>Size: </Text>
                        {product.Product_size}
                    </Text>
                    <Text style={styles.detailText}>
                        <Text style={styles.detailLabel}>Stock: </Text>
                        {product.Product_count}
                    </Text>
                    <Text style={styles.detailText}>
                        <Text style={styles.detailLabel}>SKU: </Text>
                        {product.Product_sku}
                    </Text>
                </View>
            </Box>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        marginVertical: 8,
    },
    ratingText: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 8,
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
    detailsContainer: {
        marginVertical: 16,
    },
    detailText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 8,
    },
    detailLabel: {
        fontWeight: "bold",
    },
});
