import { Box, Icon, Image, Text } from "native-base";
import { ScrollView, StyleSheet, View } from "react-native";
import { RootState, useSelector } from "../../../redux/store";
import { MaterialIcons } from '@expo/vector-icons';
import Card from "../../Common/card";
export default function FlashSale() {
    const { products } = useSelector((state: RootState) => state.products);
    return (
        <View style={{ gap: 4 }}>
            <Box>
                <Text fontSize="lg" fontWeight="bold">Flash Sale</Text>
            </Box>
            <ScrollView horizontal>
                {products.map((product) => (
                    <Card product={product} />
                ))}
            </ScrollView>
        </View>
    );
}