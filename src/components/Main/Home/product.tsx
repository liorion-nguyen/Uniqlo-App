import { Box, Text } from "native-base";
import { ScrollView, View } from "react-native";
import { RootState, useSelector } from "../../../redux/store";
import Card from "../../Common/card";
export default function Product() {
    const { products } = useSelector((state: RootState) => state.products);
    return (
        <View style={{ gap: 4 }}>
            <Box>
                <Text fontSize="lg" fontWeight="bold">Gợi ý cho bạn</Text>
            </Box>
            <ScrollView horizontal>
                {products.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </ScrollView>
        </View>
    );
}