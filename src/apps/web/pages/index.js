import { Button } from "ui";
import { CrossPlatformMessage } from "ui/CrossPlatformMessage";
import { selectAuth } from "ui/redux/reducers/authReducer";
import { useSelector, useDispatch } from 'react-redux';
import AppBar from "ui/components/AppBar";
import HomeScreen from "ui/native-only/screens/Home";

export default function Web() {
	const auth = useSelector(selectAuth);
	const dispatch = useDispatch();

	return (
		<>
			<AppBar />
			<HomeScreen />
		</>
	);
}
