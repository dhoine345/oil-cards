import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import QuickOrder from '../QuickOrder/QuickOrder';
import FuelCost from '../FuelCost/FuelCost';

function App() {
  return (
    <div className="page">
      <Header />
      <Navigation />
      <QuickOrder />
      <FuelCost />
    </div>
  );
}

export default App;
