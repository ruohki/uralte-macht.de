import React, { useRef, useState, useEffect } from 'react';
import { setConfig } from 'react-hot-loader';
import styled from 'styled-components';

import { VolumeNormal, VolumeMuted } from '../components/svg';

import Layout from '../components/layout';
import Fader from '../components/downfader';

import List from '../misc/list.json';
import BGMusic from '../audio/bg.webm';

setConfig({ pureSFC: true });

const Mute = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  color: white;
  svg path {
    transition: color 5s;
    color: ${({ muted }) =>  muted ? 'rgba(255,255,255, 1)' : 'rgba(255,255,255,.25)'};
  }
`
/*
<Mute muted={muted} onClick={() => setMuted(!muted)}>
        {muted ? (
          <VolumeMuted /> 
        ) : (
          <VolumeNormal />
        )}
      </Mute>
*/
const IndexPage = () => {
  const player = useRef(null);
  const [ muted, setMuted ] = useState(true);
  
  useEffect(() => {
    player.current.muted = muted;
  }, [ muted ])

  return (
    <Layout>
      
      <h1><span style={{ fontWeight: 100}}>Niemals vergessen, </span> <Fader list={List} /></h1>
      <audio ref={player} src={BGMusic} loop muted autoPlay />
    </Layout>
  )
}
export default IndexPage
