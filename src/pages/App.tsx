import React, { useState } from 'react';
import Form from '../components/form'
import appStyle from "./app.module.scss"
import List from '../components/list'
import Cronometer from '../components/cronometer'

import { ITask } from '../types/itask'

function App() {
	const [tasks, setTasks] = useState<ITask[]>([])
	const [selectedTask, setSelectedTask] = useState<ITask>()

	const selectTask = (taskSelected: ITask) => {
		setSelectedTask(taskSelected)
		const mappedTasks = tasks.map(task => ({...task, selected: taskSelected.id === task.id}))
		setTasks(mappedTasks)
	}

	const finishTask = () => {
		if (selectedTask) {
			const mappedTasks = tasks.map(task => {
				const isSelected = task.id === selectedTask.id
				if (isSelected) {
					return { ...task, selected: false, completed: true  }
				}
				return task
				})
			setTasks(mappedTasks)
			}
		}

  return (
    <div className={appStyle.AppStyle}>
			<Form setTasks={setTasks}/>
			<List tasks={tasks} selectTask={selectTask} />
			<Cronometer selected={selectedTask} finishTask={finishTask}/>
    </div>
  );
}

export default App;
