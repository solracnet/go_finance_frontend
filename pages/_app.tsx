import type { AppProps } from 'next/app'
import GlbalStyles from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/themes/dark';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Component {...pageProps} />
            <GlbalStyles />
        </ThemeProvider>
    )
}