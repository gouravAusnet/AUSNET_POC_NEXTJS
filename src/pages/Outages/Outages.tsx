// ! Page should not be created this way!
import React from 'react';
import Navigation from 'components/Navigation/Navigation';
// TODO: Remove css module
import './outages.module.scss';

interface OutagesProps {}

export default function Outages({}: OutagesProps) {
  return (
    <div>
      <Navigation />
      <h2 className="mt-2 text-center">Outages content</h2>
    </div>
  );
}
