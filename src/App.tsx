import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
import GlobalStyle from './global/globalStyle'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  )
}

export default App
