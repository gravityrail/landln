/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Button from '../Button';

export function HomePage() {
  return (
  	<div>
	    <h1>This is the Homepage!</h1>
	    <Button>Click Me!</Button>
	</div>
  );
}

export default HomePage;
