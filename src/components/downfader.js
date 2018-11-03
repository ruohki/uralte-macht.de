
import React, { useState } from 'react';
import styled from 'styled-components';
import { Keyframes, animated } from 'react-spring';
import _ from "lodash";

const InternalFader = Keyframes.Spring(async (next, cancel, { onDone }) => {
  await next({
    transform: "translateY(-6px)",
    opacity: 1,
    from: {
      transform: "translateY(-40px)",
      opacity: 0,
    },
    config: {
      duration: 250
    }
  });
  await next({
    transform: "translateY(0)",
    config: {
      duration: 1500
    }
  });
  await new Promise(r => setTimeout(r, 2000));
  await next({
    transform: "translateY(40px)",
    opacity: 0,
  });
  onDone()
})

const Wrapper = styled.div`
  display: inline;
  &:after{
    content: "${({ length }) => length}";
    opacity: 0;
  }
`

const Text = animated(styled.span`
  display: inline-block;
  position: absolute;
  ${({ animation}) => animation}
`)

const Fader = ({ list }) => {
  const [ current, setCurrent ] = useState(0)
  
  const next = () => {
    if (list.length <= current + 1)  {
      setCurrent(0);
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <Wrapper length={_.maxBy(list, e => e.length)}>
      <InternalFader key={current} onDone={next}>
        {props => <Text length={_.maxBy(list, (e) => e.length)} animation={props}>{list[current]}</Text>}
      </InternalFader>
    </Wrapper>
  )
}

export default Fader;