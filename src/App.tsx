import { registerRootComponent } from "expo";
import {
	View,
	Text,
	Iframe,
	FlatList,
	Image,
	ActivityIndicator,
	Animated,
} from "react-native";

function App() {
	return (
		<>
			<View>
				{/* You can find the game code here - */}
				<iframe
					width="100%"
					height="600"
					src="https://pong-pink.vercel.app/"
				></iframe>
			</View>
		</>
	);
}

export default registerRootComponent(App);
