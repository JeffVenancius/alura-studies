import { useState, useEffect } from 'react'
import Button from '../button'
import Clock from './clock'
import cronoStyle from './cronometer.module.scss'
import { time2sec, sec2min } from '../../common/utils/time'
import { ITask } from '../../types/itask'

interface IProps {
	selected: ITask | undefined;
	finishTask: () => void
}

const Cronometer = ({ selected, finishTask } : IProps) => {
	const [time, setTime] = useState<number>()
	useEffect(() => setTime(selected?.time ? time2sec(selected.time) : 0), [selected])

	const count = (remaining: number = 0) => {
		if (remaining) {
			setTimeout(() => {
				setTime(remaining - 1)
				count(remaining - 1)
				}, 1000)
			return
		}
		finishTask()
	}

	return (
		<div className={cronoStyle.cronometro}>
			<p className={cronoStyle.titulo}> Escolha um card e inicie o cronômetro</p>
			<div className={cronoStyle.relogioWrapper}>
				<Clock time={time ? sec2min(time) : "00:00"}/>
			</div>
				<Button onClick={() => count(time)}> Começar </Button>
		</div>
		)
}

export default Cronometer
