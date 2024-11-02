import { FormEvent, useEffect, useState } from "react";
import style from "./style.module.scss";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  //funcao disparada quando o usuário tem a intenção de adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length <= 3) {
      alert("Não é possível adicionar uma tarefa com menos de 4 caracteres");
      return;
    }
    const newTask = [
      ...tasks, //para pegar as tarefas que ja existem no array
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask)); //guardando tarefas no localStorage
    //JSON.Stringfy pq o localStorage não guarda arrays, então preciso transformar o array de tarefas em string
    setTaskTitle("");
  }

  //primeiro parametro do useEffect: função ()={}, segundo parametro: [] array de dependencias
  useEffect(() => {
    const tasksOnLocalStorage = localStorage.getItem(
      "tasks" /*nome que eu dei para minhas tarefas guardadas no localStorage*/
    );

    if (tasksOnLocalStorage) {
      //JSON.parse pq quero meu array de tarefas de volta para poder fazer o setTasks
      setTasks(JSON.parse(tasksOnLocalStorage));
    }
  }, []);

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa:</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor="task" id={`task-${task.id}`}>
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
