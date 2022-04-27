import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreenNative from '../screens/Home'
import UserScreenNative from '../screens/Users'
import { View, TouchableOpacity, } from "react-native"
import {
    NativeBaseProvider,
    Button,
    Box,
    HamburgerIcon,
    Pressable,
    Heading,
    VStack,
    Text,
    Center,
    HStack,
    Divider,
    Icon,
    Avatar,
} from "native-base";

const Stack = createNativeStackNavigator()

export function NativeNavigation(props) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Avatar bg="green.500" source={{
                        uri: "https://pbs.twimg.com/media/FPCf-iIWQAELe50?format=jpg&name=large"
                    }}
                        size="xs"
                    >
                        Darth Vader
                    </Avatar>
                ),
            }}
        >
            <Stack.Screen
                name="home"
                component={HomeScreenNative}
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name="user"
                component={UserScreenNative}
            />
        </Stack.Navigator>
    )
}
