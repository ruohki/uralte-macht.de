import React, { useRef, useEffect } from 'react';
import { setConfig } from 'react-hot-loader';

import Layout from '../components/layout';
import Fader from '../components/downfader';

import List from '../misc/list.json';
import BGMusic from '../audio/bg.webm';

setConfig({ pureSFC: true });

        

const IndexPage = () => {
  const player = useRef(null);

  useEffect(() => {
    player.current.play()
  }, [player]);

  return (
    <Layout>
      <h1><span style={{ fontWeight: 100}}>Niemals vergessen, </span> <Fader list={List} /></h1>
      <audio ref={player} src={BGMusic} loop />
    </Layout>
  )
}
export default IndexPage
