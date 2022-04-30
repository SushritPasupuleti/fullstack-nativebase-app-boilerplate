import { Box, HStack, Icon, IconButton, StatusBar, Text, View } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import AuthInNav from "../AuthInNav";

export default function AppBar() {

    return (
        <>
            <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="#6200ee" />
            <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
                <HStack alignItems="center">
                    {/* <IconButton icon={<Icon size="md" as={MaterialIcons} name="menu" color="white" />} /> */}
                    <Text color="white" fontSize={20} fontWeight="bold" paddingLeft="2">
                        Home
                    </Text>
                </HStack>
                <HStack px="1" py="1">
                    <AuthInNav/>
                </HStack>
            </HStack>
        </>
    );
}