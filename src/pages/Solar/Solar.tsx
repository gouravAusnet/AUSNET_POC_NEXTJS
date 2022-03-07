// ! Page should not be created this way!
import React from 'react';

import Navigation from 'components/Navigation/Navigation';
// TODO: Remove css module
import './solar.module.scss';

interface SolarProps {}

export default function Solar({}: SolarProps) {
  return (
    <div>
      <Navigation />
      <h2 className="mt-2 text-center">Solar content</h2>
    </div>
  );
}
