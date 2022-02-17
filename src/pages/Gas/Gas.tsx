import React from 'react'
import './gas.module.scss'
import Navigation from 'components/Navigation/Navigation';
interface GasProps {
}

export default function Gas({}: GasProps) {
    return(<div>
        <Navigation/>
        <h2 className="mt-2 text-center">Gas content</h2>
        </div>
        )
}