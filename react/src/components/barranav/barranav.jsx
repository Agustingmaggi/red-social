import React from "react"
import AbcIcon from '@mui/icons-material/Abc';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./barranav.css"
import { Link } from "react-router-dom"

const Barra_nav = () => {
    return (
        <div className="barra-navegacion">
            <AbcIcon className='icono-nav' />
            <AcUnitIcon className='icono-nav' />
            <AccessAlarmIcon className='icono-nav' />
            <AccessibilityIcon className='icono-nav' />
            <AccountCircleIcon className='icono-nav' />
            <Link to="/registrate">Registrate</Link>
            <Link to="/ingresa">Ingresa</Link>
        </div>
    )
}

export default Barra_nav