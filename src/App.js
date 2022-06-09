import './App.css';
import Todos from './TodoList/Todos'
import TrafficLight from './TrafficLights/TrafficLight';
import './TrafficLights/styles.css'

function App() {
  return (
    <div className = 'App'>
      {/* <Todos /> */}
      <TrafficLight initialValue={0}/>
      <TrafficLight initialValue={1}/>
    </div>
  );
}

export default App;
