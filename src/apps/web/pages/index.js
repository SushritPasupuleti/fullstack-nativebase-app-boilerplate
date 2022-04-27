import { Button } from "ui";
import { CrossPlatformMessage } from "ui/CrossPlatformMessage";
import { selectAuth } from "ui/redux/reducers/authReducer";
import { useSelector, useDispatch } from 'react-redux';
import AppBar from "ui/components/AppBar";

export default function Web() {
	const auth = useSelector(selectAuth);
	const dispatch = useDispatch();

	return (
		<div>
			<AppBar />
			<h1>Web</h1>
			<Button />
			<br />
			<CrossPlatformMessage />
			<br />
			{
				auth.userData && (
					<div>
						<h3>User Data Set</h3>
					</div>
				)
			}
			{
				!auth.userData && (
					<div>
						<h3>User Data Not Set</h3>
					</div>
				)
			}
		</div >
	);
}
