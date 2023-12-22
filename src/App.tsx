import Container from "./components/Container"
import AppContextProvider from "./context/AppContext"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <Container>
    <AppContextProvider>
      <Home />
    </AppContextProvider>

    </Container>
    </>
  )
}

export default App
