import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
import Cart from './containers/Cart'
import GlobalStyle from './global/globalStyle'
import { store } from './store'
import Footer from './components/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
