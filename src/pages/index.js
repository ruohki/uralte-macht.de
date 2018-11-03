import React from 'react';
import { setConfig } from 'react-hot-loader';

import Layout from '../components/layout';
import Fader from '../components/downfader';

import List from '../misc/list.json';

setConfig({ pureSFC: true });

const IndexPage = () => (
  <Layout>
    <h1><span style={{ fontWeight: 100}}>Niemals vergessen, </span> <Fader list={List} /></h1>
  </Layout>
)
export default IndexPage
