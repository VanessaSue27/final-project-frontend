import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <>
      <h1>This is the About Page!!</h1>
      <h2>Text about how we came up with the idea for this project</h2>
      <h2>GDPR and privacy disclaimer explaining this is a school project</h2>
      <h2>Credit flaticon for assets (icons and images also?)</h2>
      <h2>Include our pictures and link to our portfolios</h2>
      <Link to="/signup">Back to Sign Up Page</Link>
    </>
  );
};
