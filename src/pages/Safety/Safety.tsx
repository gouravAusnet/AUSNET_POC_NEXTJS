import React from 'react';

import Navigation from 'components/Navigation/Navigation';
// TODO: Remove css module
import './safety.module.scss';

interface SafetyProps {}

export default function Safety({}: SafetyProps) {
  return (
    <div>
      <Navigation />
      <h2 className="mt-2 text-center">Safety content</h2>
    </div>
  );
}
