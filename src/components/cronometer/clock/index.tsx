import clockStyle from './clock.module.scss'

interface IProps {
	time: string;
}
const Clock = ({ time }: IProps) => {
	return (
		<>
			<span className={clockStyle.relogioNumero}>{time[0]}</span>
			<span className={clockStyle.relogioNumero}>{time[1]}</span>
			<span className={clockStyle.relogioDivisao}>{time[2]}</span>
			<span className={clockStyle.relogioNumero}>{time[3]}</span>
			<span className={clockStyle.relogioNumero}>{time[4]}</span>
		</>

	)
}

export default Clock
