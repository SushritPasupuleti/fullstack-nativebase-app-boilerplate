import { Text, View } from "react-native"
import { Button } from "ui"
import { CrossPlatformMessage } from "ui/CrossPlatformMessage"
import { Provider } from "ui/Provider"
import { selectAuth } from "ui/redux/reducers/authReducer";
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-native';
import AppBar from "ui/components/AppBar";

export default function App() {
	const auth = useSelector(selectAuth);
	const dispatch = useDispatch();

	return (
		<Provider>
			{/* <SafeAreaView> */}
				<AppBar />
				<Text>Native</Text>
				<Button />
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
			{/* </SafeAreaView> */}
		</Provider>
	)
}
