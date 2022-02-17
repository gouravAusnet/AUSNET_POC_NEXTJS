import React from 'react'
import './solar.module.scss'
import Navigation from 'components/Navigation/Navigation';
interface SolarProps {
}

export default function Solar({}: SolarProps) {
    return(<div>
        <Navigation/>
        <h2 className="mt-2 text-center">Solar content</h2>
        </div>
        )
}