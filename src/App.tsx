import "bootstrap/dist/css/bootstrap.min.css";
import { AppRoutes } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
    return (
        <>
            <AppRoutes />
            <GlobalStyles />
        </>
    );
}

export default App;
