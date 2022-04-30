import { useDispatch, useSelector } from "react-redux";
import { getAuth, selectAuth } from "../redux/reducers/authReducer";
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
import { MaterialIcons } from '@expo/vector-icons';

export default function AuthInNav() {
    const auth = useSelector(selectAuth);
    const dispatch = useDispatch();

    const signIn = () => {
        console.log("signing in...");
        dispatch(getAuth());
    }

    return (
        <Box>
            {
                auth.userData !== null ? (
                    //while auth data is set
                    <Avatar bg="green.500" source={{
                        uri: auth.userData.picture.medium
                    }}
                        size="xs"
                    >
                        {auth.userData.name.last}
                    </Avatar>
                ) : (
                    <Button borderRadius="8" padding={2} marginBottom={1}
                        rightIcon={
                            <MaterialIcons name="navigate-next" size="md" color="white" />
                        }
                        onPress={() => signIn()}
                    >
                        Sign in
                    </Button>
                )
            }
        </Box>
    )
}
