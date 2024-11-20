import { Box, Image, Stack, Text } from "native-base";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

export default function Category() {
    const { categories } = useSelector((state: RootState) => state.categories);
    return (
        <View style={styles.container}>
            <Box style={styles.header}>
                <Text fontSize="lg" fontWeight="bold">Category</Text>
                <Text fontSize="sm" color="#816551">See All</Text>
            </Box>
            <ScrollView horizontal style={styles.category}>
                {
                    categories.map((category) => (
                        <Box key={category.id}>
                            <Box style={styles.imageContainer}>
                                <Image
                                    source={{ uri: category.image }}
                                    alt={category.name}
                                    style={styles.image}
                                />
                            </Box>
                            <Text fontSize="sm" color="white" textAlign="center">{category.name}</Text>
                        </Box>
                    ))
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 10,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    category: {
        width: "100%"
    },
    imageContainer: {
        width: 150,
        height: 150,
        backgroundColor: "#f7f2ec",
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100
    }
});
