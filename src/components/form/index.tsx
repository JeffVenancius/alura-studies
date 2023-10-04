import React, { useState } from 'react'
import Button from '../button'
import formStyle from './form.module.scss'
import {v4 as uuidv4} from 'uuid'

import { ITask } from '../../types/itask'

interface IProps {
	setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form = ({ setTasks } : IProps) => { 
	const emptyState = {
		task: "",
		time: "00:00",
	}

	interface ITaskForm {
		task: string; 
		time: string;
	}
	const [task, setTask] = useState<ITaskForm>(emptyState)

	const saveTask = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setTasks(oldTasks => { 
				return [
				...oldTasks, 
				{
					...task, 
					selected: false,
					completed: false,
					id: uuidv4() }]
			})
		setTask(emptyState)
	}

		return (
			<form className={formStyle.novaTarefa} onSubmit={ e => saveTask(e) }>
				<div className={formStyle.inputContainer}>
					<label htmlFor="tarefa">
						Adicione um novo estudo
					</label>
					<input
						value={task.task}
						onChange={e => setTask({...task, task: e.target.value})}
						type="text"
						name="tarefa"
						id="tarefa"
						placeholder="o que você quer estudar."
						required
					/>
				</div>
				<div className={formStyle.inputContainer}>
					<label htmlFor="tempo">
						Tempo
					</label>
					<input
						value={task.time}
						onChange={e => setTask({...task, time: e.target.value})}
						type="time"
						step="1"
						name="tempo"
						id="tempo"
						min="00:00:00"
						max="01:30:00"
					/>
				</div>
				<Button type="submit"> Adicionar </Button>
			</form>
	)
	}

export default Form
