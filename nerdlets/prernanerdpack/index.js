import React from 'react';
import { App } from './App';

import { BillboardChart } from 'nr1';
import Mypie from './Mypie';
import Myline from './Myline';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class PrernanerdpackNerdlet extends React.Component {
  render() {
    return(
      <>
      <App />
      <BillboardChart
        accountIds={[4267273]}
        query="SELECT count(*) FROM Public_APICall "
        />
      <Mypie />
      <Myline />
      </>
      
    );
  }
}
