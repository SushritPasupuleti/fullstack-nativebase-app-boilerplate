import AppBar from "ui/components/AppBar";
import HomeScreen from "ui/native-only/screens/Home";
import HomeSEO from "../components/seo/home";

export default function Web() {

	return (
		<>
			<HomeSEO />
			<AppBar />
			<HomeScreen />
		</>
	);
}
