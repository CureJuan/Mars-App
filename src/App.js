import { AuthProvider } from "./contexts/Auth";
import "./App.css";
import Rutas from "./routes";

function App() {
  return (
    <AuthProvider>
      <Rutas />
    </AuthProvider>
  );
}
export default App;
