import React from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  alignitems: center;
  justifycontent: center;
  flex: 1;
  backgroundcolor: ${props => props.theme.WHITE};
  width: 90%;
  alignself: center;
`;

const Text = styled.Text`
  color: ${props => props.theme.PRIMARY};
  fontsize: 18;
  textalign: center;
`;

export default function Welcome() {
  return (
    <Root>
      <Text>Welcome, if you see this that mean everything work!!!</Text>
    </Root>
  );
}
