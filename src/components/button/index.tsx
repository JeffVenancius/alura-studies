import React from 'react'
import buttonStyle from './button.module.scss'

interface IProps {
	children?: React.ReactNode;
	type?: "button" | "submit" | "reset" | undefined;
	onClick?: () => void
}

const Button = ({ onClick, type = "button", children } : IProps) => {
		return (
				<button onClick={onClick} type={type} className={buttonStyle.botao}>
					{children}
				</button>
	)
}

export default Button
