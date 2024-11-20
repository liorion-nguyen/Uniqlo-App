import { Box, Icon, Image, Text } from "native-base";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootState, useSelector } from "../../../redux/store";
import { MaterialIcons } from '@expo/vector-icons';
export default function FlashSale() {
    const { products } = useSelector((state: RootState) => state.products);
    return (
        <View>
            <Box>
                <Text fontSize="lg" fontWeight="bold">Flash Sale</Text>
            </Box>
            <ScrollView horizontal>
                {products.map((product) => (
                    <Box key={product.id}>
                        <Box style={styles.image}>
                            <Image source={{ uri: product.Product_images[0] }} style={{ width: 150, height: 150 }} />
                            <Box style={styles.iconImage}>
                                <Icon as={<MaterialIcons name="favorite" />} size={5} color="muted.400" />
                            </Box>
                        </Box>
                        <Box>
                            <Box style={styles.header}>
                                <Text>{product.Product_name}</Text>
                                <Box style={styles.rating}>
                                    <Icon as={<MaterialIcons name="star" />} size={5} color="yellow.500" />
                                    <Text>{product.Product_rating}</Text>
                                </Box>
                            </Box>
                            <Text>{product.Product_price}</Text>
                        </Box>
                    </Box>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flexDirection: "row",
        position: 'relative'
    },
    iconImage: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#f3edeb',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rating: {
        flexDirection: "row",
        alignItems: "center"
    }
})