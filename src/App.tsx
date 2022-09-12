import Navigation from "./components/screen/Navigation/Navigation";
import AppRouter from "./router/AppRouter";
import './styles/global.scss'
import './styles/react-select.scss'



function App() {
  return (
    <div className="app">
      <Navigation />
      <AppRouter />
    </div>
  );
}

export default App;
