import { Box, Icon, Input, Stack, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";

export default function Header() {
  return (
    <Stack style={style.container}>
      <Box style={style.search}>
        <Input w={{
          base: "80%",
          md: "25%",
        }}
          variant="rounded"
          InputLeftElement={
            <Icon as={<MaterialIcons name="search" />} size={5} ml="2" color="muted.400" />
          }
          InputRightElement={
            <Icon as={<MaterialIcons name="camera-enhance" />} size={5} mr="2" color="muted.400" />
          }
          placeholder="Search"
        />
        <Icon as={<MaterialIcons name="shopping-cart" />} size={5} ml="2" color="muted.400" />
        <Icon as={<MaterialIcons name="messenger" />} size={5} ml="2" color="muted.400" />
      </Box>
    </Stack>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: 10,
    marginBottom: 10  
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  icon: {
    backgroundColor: "#704f37",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
