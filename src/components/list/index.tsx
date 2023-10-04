import Item from './item'
import listStyle from './list.module.scss'

import { ITask } from '../../types/itask'


interface IProps {
tasks: ITask[];
selectTask: (taskSelected: ITask) => void;
}

const List = ({tasks, selectTask} : IProps) => {
	return (
		<aside className={listStyle.listaTarefas}>
			<h2>Estudos do dia</h2>
		<ul>
			{tasks.map((task:ITask) => <Item  selectTask={selectTask} key={task.id} {...task} />)}
		</ul>
		</aside>
		)
}

export default List
