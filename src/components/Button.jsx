import React from "react";
import './Button.css'

const Button = ({ btnName }) => (
	<div className="btn-container">
		<input type="button" className="btn" value={btnName}></input>
	</div>
)

export default Button