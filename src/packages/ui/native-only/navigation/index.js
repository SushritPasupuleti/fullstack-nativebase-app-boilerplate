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
import AuthInNav from '../../components/AuthInNav';

const Stack = createNativeStackNavigator()

export function NativeNavigation(props) {

    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <AuthInNav />
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
