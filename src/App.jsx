import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes/routes'
import Header from "./components/common/Header/Header"
import Footer from './components/common/Footer/Footer'

/**
 * App  component.
 * 
 * Descrição: Este componente representa o ponto de entrada na aplicação.
 * 
 * @component
 * @example
 * <App />
 * 
 * @returns {JSX.Element} O conteúdo da página renderizado.
 */

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            <Routes />
            <Footer />
        </QueryClientProvider>
    )
}

export default App
