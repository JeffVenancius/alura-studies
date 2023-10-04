import itemStyle from './item.module.scss'
import { ITask } from '../../../types/itask'

interface IProps extends ITask {
	selectTask: (taskSelected: ITask) => void;
}

const Item = ({ task, time, selected, completed, id, selectTask }: IProps) => {
	return (
		<li 
			className={`${itemStyle.item} ${selected ? itemStyle.itemSelecionado : ''} ${completed ? itemStyle.itemCompletado : ""}`}
			onClick={() => !completed && selectTask({task, time, selected, completed, id})}>
			<h3>{task}</h3>
			<span>{time}</span>
			{completed && <span className={itemStyle.concluido} aria-label="tarefa completada"></span>}
		</li>
	)
}

export default Item
