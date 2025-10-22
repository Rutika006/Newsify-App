import React from 'react';
import Loading from './Loading.gif';

const Spinner = () => (
  <div className="text-center my-5">
    <img src={Loading} alt="loading" width="80" height="80" />
  </div>
);

export default Spinner;
