import CardGrid from "./components/CardGrid";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CardGrid />
    </ChakraProvider>
  );
}

export default App;
