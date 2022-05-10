import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { useEffect } from 'react';
import { useAppselector } from '../redux/hooks';
import AuthContext from '../components/organisms/AuthContext/AuthContext';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ChakraProvider>
                <AuthContext>
                    <Component {...pageProps} />
                </AuthContext>
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
