import { Box, HStack, Icon, IconButton, StatusBar, Text, View } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

export default function AppBar() {

    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="#6200ee" />
            <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />} />
                    <Text color="white" fontSize="20" fontWeight="bold">
                        Home
                    </Text>
                </HStack>
                <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="md" color="white" />} />
                    {/* <IconButton icon={<Icon name="alert" type="Octicons" size="md" color="white" />} /> */}
                    {/* <View>
                        <AntDesign name="info" size={24} color="black" />
                    </View> */}
                    {/* <IconButton icon={<AntDesign name="link" size={24} color="black" />} /> */}
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="md" color="white" />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="md" color="white" />} />
                </HStack>
            </HStack>
        </>
    );
}