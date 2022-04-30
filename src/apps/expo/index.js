import { registerRootComponent } from 'expo';
import { ReduxProviderNative } from 'ui/redux/ReduxProvider';

import App from './App';

export default function AppWrapper() {
    return (
        <ReduxProviderNative>
            <App />
        </ReduxProviderNative>
    );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWrapper);
