import React from 'react';

import Navigation from 'components/Navigation/Navigation';
// TODO: Remove css module
import './gas.module.scss';

interface GasProps {}

export default function Gas({}: GasProps) {
  return (
    <div>
      <Navigation />
      <h2 className="mt-2 text-center">Gas content</h2>
    </div>
  );
}
