import { Text } from "react-native"
import { Button } from "ui"
import { CrossPlatformMessage } from "ui/CrossPlatformMessage"
import { Provider } from "ui/Provider"

export default function App() {
  return (
    <Provider>
      <Text>Native</Text>
      <Button />
    </Provider>
  )
}
