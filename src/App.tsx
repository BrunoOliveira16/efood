import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'

import Footer from './components/Footer'

import GlobalStyle from './global/globalStyle'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}

export default App
