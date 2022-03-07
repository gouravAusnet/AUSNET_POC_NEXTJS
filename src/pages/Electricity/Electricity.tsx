import React from 'react';

import Navigation from 'components/Navigation/Navigation';
// TODO: Remove css module
import './electricity.module.scss';

interface ElectricityProps {}

export default function Electricity({}: ElectricityProps) {
  return (
    <div>
      <Navigation />
      <h2 className="mt-2 text-center">Electricity content</h2>
    </div>
  );
}
