import { Box, HStack, Icon, Input, Stack, Text } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function Header() {
  const [isFilterVisible, setFilterVisible] = useState(false);

  return (
    <Stack style={style.container}>
      <Box style={style.search}>
        <Input w={{
          base: "75%",
          md: "25%",
        }}
          variant="rounded"
          InputLeftElement={
            <Icon as={<MaterialIcons name="search" />} size={5} ml="2" color="muted.400" />
          }
          placeholder="Search"
        />
        <Box style={style.icon} onTouchEnd={() => setFilterVisible(!isFilterVisible)}>
          <Icon as={<MaterialIcons name="filter-list" />} size={5} color="white" />
        </Box>
      </Box>

      {isFilterVisible && (
        <Input placeholder="Filter..." />
      )}

    </Stack>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    gap: 10
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
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
