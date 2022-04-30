import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/Home'
import UserScreen from '../screens/Users'
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
                component={HomeScreen}
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name="user"
                component={UserScreen}
            />
        </Stack.Navigator>
    )
}
