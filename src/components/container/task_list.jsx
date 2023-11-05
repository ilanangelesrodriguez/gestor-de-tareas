import React from 'react'
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

export default function TaskListComponent() {
    const defaultTask = new Task('Ejemplo', 'Descripcion por defecto', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log("TODO: Cambiar estado de una tarea.")
    }

  return (
    <div>
        <div>
            <h1>
                Tus tareas
            </h1>
        </div>
        {/* TODO: Aplicar un For/Map para renderizar una lista */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}
