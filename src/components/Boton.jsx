import React from "react";
import './Boton.css'

const Boton = ({ btnName }) => (
	<div className="btn-container">
		<input type="button" className="btn" value={btnName}></input>
	</div>
)

export default Boton