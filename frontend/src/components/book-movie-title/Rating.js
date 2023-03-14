
import { Link, Switch } from 'react-router-dom';
import Day31 from './Day31';
import Day30 from './Day30';
import Day29 from './Day29';

import React from 'react';

const Rating = ({ match }) => {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let todaydate = date.getDate();
  console.log(month);

  console.log(Number((month + 1) % 2) !== 0);
  return (
    <>
      {(() => {
        if (month === 1) {
          return <Day29 match={`${match}`} year={`${year}`} month={`${month + 1}`} todaydate={`${todaydate}`} />
        } else if ((month + 1) % 2 !== 0) {
          return <Day31 match={`${match}`} year={`${year}`} month={`${month + 1}`} todaydate={`${todaydate}`} />
        } else if ((month + 1) % 2 === 0) {
          return <Day30 match={`${match}`} year={`${year}`} month={`${month + 1}`} todaydate={`${todaydate}`} />
        }

      })()}

    </>
  );
};

export default Rating;
