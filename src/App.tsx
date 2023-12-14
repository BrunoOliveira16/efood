import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
import Cart from './components/Cart'
import GlobalStyle from './global/globalStyle'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
