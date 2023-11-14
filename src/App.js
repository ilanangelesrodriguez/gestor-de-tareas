import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo01 from "./hooks/Ejemplo01";
import {Ejemplo02} from "./hooks/Ejemplo02";
import {MiComponenteConContexto} from "./hooks/Ejemplo03";
import {Ejemplo04} from "./hooks/Ejemplo04";

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

                {/* <Ejemplo01 /> */}
                {/* <Ejemplo02 /> */}
                {/* <MiComponenteConContexto /> */}

                <Ejemplo04 nombre={"Ilan"}>
                    {/* Esto es el children */}
                    <h1>Hola</h1>
                    <p>Esto es un párrafo del props.children</p>
                </Ejemplo04>

            </header>
        </div>
    );
}

export default App;
