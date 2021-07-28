import './App.css';
import Thermometer from './components/Thermometer';
function App() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(1158.0);
  const [amountRaised, setAmountRaised] = useState(868.5);

  const handleDonation = () => {};

  return (
    <div className='App'>
      {/* Replace this with the logo as an img element with responsive styling  */}
      Water Project
      <Thermometer
        name={`The Water Project - Global water Initiative`}
        goal={1158.0}
        amountRaised={868.5}
      />
      <button onClick={handleDonation}>Give Now!</button>
    </div>
  );
}

export default App;
