import React from 'react'
import './safety.module.scss'
import Navigation from 'components/Navigation/Navigation';
interface SafetyProps {
}

export default function Safety({}: SafetyProps) {
    return(<div>
        <Navigation/>
        <h2 className="mt-2 text-center">Safety content</h2>
        </div>
        )
}