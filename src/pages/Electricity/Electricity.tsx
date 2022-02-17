import React from 'react'
import './electricity.module.scss'
import Navigation from 'components/Navigation/Navigation';
interface ElectricityProps {
}

export default function Electricity({}: ElectricityProps) {
    return(<div>
        <Navigation/>
        <h2 className="mt-2 text-center">Electricity content</h2>
        </div>
        )
}