import { store } from "./store";
import { Provider } from 'react-redux';

export function ReduxProviderNative({ children }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}