import React from "react";
import './tweets.css'

const Twits = ({ datos }) => {
    return (
        <div className="tweets">
            <br />
            <h3>{datos.nombre_usuario}</h3>
            <br />
            {datos.tweet}
        </div>
    )
}

export default Twits