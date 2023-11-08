import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo01 from "./hooks/Ejemplo01";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <p>
                Edit <code>src/App.js</code> and save to reload.
                </p> */}
                {/* Componente propio Greeting.jsx */}
                {/* <Greeting name="Ilan" /> */}
                {/* <GreetingF name="Ilan" /> */}
                {/* Componente de listado de tareas */}
                {/*<TaskListComponent></TaskListComponent>*/}
                {/* Ejemplo de uso de Hooks*/}
                <Ejemplo01 />
            </header>
        </div>
    );
}

export default App;
