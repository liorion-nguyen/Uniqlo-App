import { View } from "react-native";

import { Box, Icon, Text } from "native-base";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function MenuBuy() {
    return (
        <Box style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <Icon as={MaterialIcons} name="question-answer" size={6} color="red.500" />
                <Text style={styles.text}>Chat ngay</Text>
            </TouchableOpacity>
            <View style={styles.line}></View>
            <TouchableOpacity style={styles.item}>
                <Icon as={MaterialIcons} name="add-shopping-cart" size={6} color="red.500" />
                <Text style={styles.text}>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buy}>
                <Text style={styles.buyText}>Mua ngay</Text>
                <Text style={styles.buyPrice}>1.200.000đ</Text>
            </TouchableOpacity>
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        width: "100%",
    },
    buy: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    item: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 10,
    },
    buyText: {
        color: "white",
        fontSize: 12,
    },
    buyPrice: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
    line: {
        width: 1,
        backgroundColor: "grey",
        height: '80%'
    }
});