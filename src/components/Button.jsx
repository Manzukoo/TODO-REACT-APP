import React from "react";
import './Button.css'

const Button = ({ form, btnName }) => (
	<div className="btn-container">
		<input form={form ? 'formTask' : ''} type={form ? 'submit' : 'button'} className="btn" value={btnName}></input>
	</div>
)

export default Button