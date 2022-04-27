import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
} from "native-base";
import HomeScreenNative from "../screens/Home";
import { selectAuth } from "../../redux/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { View, TouchableOpacity,  } from "react-native"

const Drawer = createDrawerNavigator();

const getIcon = (screenName) => {
    switch (screenName) {
        case "Inbox":
            return "email";
        case "Outbox":
            return "send";
        case "Favorites":
            return "heart";
        case "Archive":
            return "archive";
        case "Trash":
            return "trash-can";
        case "Spam":
            return "alert-circle";
        default:
            return undefined;
    }
};

function CustomDrawerContent(props) {

    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

    return (
        <DrawerContentScrollView {...props} safeArea>
            <VStack space="6" my="2" mx="1">
                <Box px="4">
                    {
                        auth.userData && (
                            <View>
                                <Text>User Data Set</Text>
                            </View>
                        )
                    }
                    {
                        !auth.userData && (
                            <View>
                                <Text>User Data Not Set</Text>
                            </View>
                        )
                    }
                </Box>
                <VStack divider={<Divider />} space="4">
                    <VStack space="3">
                        {props.state.routeNames.map((name, index) => (
                            <Pressable
                                px="5"
                                py="3"
                                rounded="md"
                                bg={
                                    index === props.state.index
                                        ? "rgba(6, 182, 212, 0.1)"
                                        : "transparent"
                                }
                                onPress={(event) => {
                                    props.navigation.navigate(name);
                                }}
                            >
                                <HStack space="7" alignItems="center">
                                    <Icon
                                        color={
                                            index === props.state.index ? "primary.500" : "gray.500"
                                        }
                                        size="5"
                                        as={<MaterialCommunityIcons name={getIcon(name)} />}
                                    />
                                    <Text
                                        fontWeight="500"
                                        color={
                                            index === props.state.index ? "primary.500" : "gray.700"
                                        }
                                    >
                                        {name}
                                    </Text>
                                </HStack>
                            </Pressable>
                        ))}
                    </VStack>
                </VStack>
            </VStack>
        </DrawerContentScrollView>
    );
}
export function MainDrawer() {
    return (
        <Box flex={1}>
            <Drawer.Navigator
                initialRouteName="Home"
                defaultNavigationOptions={{
                    header: () => (
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                height: 50,
                            }}>
                            <TouchableOpacity
                                style={{ padding: 10 }}
                                onPress={() => {
                                    alert('Left');
                                }}>
                                <Text>Left</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ padding: 10 }}
                                onPress={() => {
                                    alert('Right');
                                }}>
                                <Text>Right</Text>
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            // drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeScreenNative} />
            </Drawer.Navigator>
        </Box>
    );
}
