import React from 'react'
import './outages.module.scss';
import Navigation from 'components/Navigation/Navigation';
interface OutagesProps {
}

export default function Outages({}: OutagesProps) {
    return(<div>
        <Navigation/>
        <h2 className="mt-2 text-center">Outages content</h2>
        </div>
        )
}