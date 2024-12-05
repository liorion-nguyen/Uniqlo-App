import { StyleSheet, TouchableOpacity, SafeAreaView, View, ScrollView, Alert } from "react-native";
import { Box, Text, Image, HStack, VStack, Checkbox, CheckIcon, Select } from "native-base";
import { useState } from "react";

export default function Cart() {
    const [products, setProducts] = useState<any[]>([
        {
            id: "1",
            Product_name: "Áo Thun Nam Cổ Tròn, Chất Liệu Cotton Cao Cấp",
            Product_price: 250000,
            Product_priceSale: 199000,
            Product_images: ["https://uniqlo-staging.vercel.app/assets/blog-4-BGyfREhB.jpg"],
            quantity: 1,
            types: ["Màu Đen", "Màu Trắng", "Màu Xanh"],
            isChecked: false,
        },
        {
            id: "2",
            Product_name: "Quần Jean Nam Dáng Slim Fit, Màu Xanh Đậm",
            Product_price: 500000,
            Product_priceSale: 399000,
            Product_images: ["https://uniqlo-staging.vercel.app/assets/blog-4-BGyfREhB.jpg"],
            quantity: 1,
            types: ["Màu Đen", "Màu Trắng", "Màu Xanh"],
            isChecked: false,
        },
        {
            id: "3",
            Product_name: "Quần Jean Nam Dáng Slim Fit, Màu Xanh Đậm",
            Product_price: 500000,
            Product_priceSale: 399000,
            Product_images: ["https://uniqlo-staging.vercel.app/assets/blog-4-BGyfREhB.jpg"],
            quantity: 1,
            types: ["Màu Đen", "Màu Trắng", "Màu Xanh"],
            isChecked: false,
        },
        {
            id: "4",
            Product_name: "Quần Jean Nam Dáng Slim Fit, Màu Xanh Đậm",
            Product_price: 500000,
            Product_priceSale: 399000,
            Product_images: ["https://uniqlo-staging.vercel.app/assets/blog-4-BGyfREhB.jpg"],
            quantity: 1,
            types: ["Màu Đen", "Màu Trắng", "Màu Xanh"],
            isChecked: false,
        },
        {
            id: "5",
            Product_name: "Quần Jean Nam Dáng Slim Fit, Màu Xanh Đậm",
            Product_price: 500000,
            Product_priceSale: 399000,
            Product_images: ["https://uniqlo-staging.vercel.app/assets/blog-4-BGyfREhB.jpg"],
            quantity: 1,
            types: ["Màu Đen", "Màu Trắng", "Màu Xanh"],
            isChecked: false,
        },
    ]);

    // Giảm số lượng sản phẩm
    const handleDecreaseQuantity = (productId: string) => {
        const product = products.find(product => product.id === productId);
        if (product?.quantity === 1) {
            Alert.alert(
                "Xác nhận xóa",
                "Bạn có chắc chắn muốn xóa sản phẩm khỏi giỏ hàng không?",
                [
                    {
                        text: "Hủy",
                        style: "cancel"
                    },
                    {
                        text: "Xóa",
                        onPress: () => {
                            setProducts(products.filter(product => product.id !== productId));
                        }
                    }
                ]
            );
        } else {
            setProducts(products.map(product =>
                product.id === productId ? { ...product, quantity: product.quantity - 1 } : product
            ));
        }
    };

    // Tăng số lượng sản phẩm
    const handleIncreaseQuantity = (productId: string) => {
        setProducts(products.map(product => product.id === productId ? { ...product, quantity: product.quantity + 1 } : product));
    };

    // Chuyển trạng thái checkbox (isChecked)
    const handleToggleCheck = (productId: string) => {
        setProducts(products.map(product => 
            product.id === productId ? { ...product, isChecked: !product.isChecked } : product
        ));
    };

    // Tính tổng tiền dựa trên checkbox (isChecked)
    const totalAmount = products.reduce((total, product) => 
        product.isChecked ? total + product.Product_priceSale * product.quantity : total, 0
    ).toLocaleString();

    return (
        <SafeAreaView style={styles.container}>
            <Box style={styles.boxHeader}>
                <Text style={styles.textTitle}>Giỏ hàng</Text>
                <Box style={styles.boxTotal}>
                    <Text style={styles.textDesTotal}>Tổng tiền: </Text>
                    <Text style={styles.textTotal}>{totalAmount}đ</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textBtn}>Thanh toán</Text>
                    </TouchableOpacity>
                </Box>
            </Box>
            <View style={styles.line}></View>
            <ScrollView style={styles.container}>
                {products.map((product) => (
                    <Box key={product.id} style={styles.productContainer}>
                        <HStack space={3} alignItems="center">
                            <Checkbox 
                                value={product.id} 
                                isChecked={product.isChecked} 
                                onChange={() => handleToggleCheck(product.id)} 
                            />
                            <Image source={{ uri: product.Product_images[0] }} alt={product.Product_name} style={styles.image} />
                            <VStack flex={1} space={2}>
                                <Text style={styles.productName}>{product.Product_name}</Text>
                                <Select
                                    selectedValue={product.types[0]}
                                    minWidth="200"
                                    accessibilityLabel="Choose Type"
                                    placeholder="Choose Type"
                                    _selectedItem={{
                                        bg: "red.600",
                                        endIcon: <CheckIcon size="5" />
                                    }}
                                    mt={1}
                                    onValueChange={itemValue => {
                                        setProducts(products.map(product => product.id === product.id ? { ...product, type: itemValue } : product));
                                    }}
                                >
                                    {product.types.map((type: string) => (
                                        <Select.Item label={type} value={type} key={type} />
                                    ))}
                                </Select>
                                <Box style={styles.boxPrice}>
                                    <Box style={styles.boxPriceSale}>
                                        <Text style={styles.salePrice}>₫{product.Product_priceSale.toLocaleString()}</Text>
                                        <Text style={styles.originalPrice}>₫{product.Product_price.toLocaleString()}</Text>
                                    </Box>
                                    <HStack space={2} alignItems="center">
                                        <TouchableOpacity style={styles.buttonCart} onPress={() => handleDecreaseQuantity(product.id)}>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                        <Text>{product.quantity}</Text>
                                        <TouchableOpacity style={styles.buttonCart} onPress={() => handleIncreaseQuantity(product.id)}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                    </HStack>
                                </Box>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    textBtn: {
        color: "white",
        fontSize: 14,
    },
    textTotal: {
        fontSize: 14,
        color: "red",
        fontWeight: "bold",
        marginRight: 10,
    },
    textDesTotal: {
        fontSize: 14,
    },
    boxTotal: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "red",
    },
    container: {
        padding: 10,
        flex: 1,
    },
    boxHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    line: {
        borderWidth: 0.5,
        borderColor: "grey",
        marginVertical: 10,
    },
    productContainer: {
        paddingVertical: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    productName: {
        fontWeight: "bold",
        flex: 1
    },
    category: {
        color: "grey",
    },
    originalPrice: {
        textDecorationLine: "line-through",
        color: "grey",
        fontSize: 10,
    },
    salePrice: {
        color: "red",
        fontWeight: "bold",
        fontSize: 12,
    },
    flashSale: {
        color: "orange",
    },
    boxPrice: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonCart: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    boxPriceSale: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
    }
})