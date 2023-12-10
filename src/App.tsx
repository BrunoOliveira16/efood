import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
import Cart from './components/Cart'
import GlobalStyle from './global/globalStyle'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <Cart />
    </BrowserRouter>
  )
}

export default App
