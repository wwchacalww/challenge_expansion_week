import React  from 'react';

import { useSpring, animated } from 'react-spring';
import { Container, Header, Content, PensamentoCriticoStyle } from './styles';

import SoftSkillsImage from '../../assets/softSkills.svg';
import PensamentoCriticoImage from '../../assets/criticalThinking.svg';


import { PensamentoCriticoTexto } from './pensamentoCritico';

import { SoftSkillsTexto } from './softSkills';


const PensamentoCritico: React.FC = () => {

  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <Container>
      <Header>
        <h1>Soft Skills</h1>
      </Header>
      <Content>
        <div>
          <animated.div style={props} >
            { SoftSkillsTexto.map( texto => {
              return (
                <animated.h3 style={props} key={texto} > {texto} </animated.h3>
              )
            })}
          </animated.div>
          <img src={SoftSkillsImage} alt="Soft Skills" />
        </div>

        <PensamentoCriticoStyle>
          { PensamentoCriticoTexto.map( texto => {
            return (
              <animated.h3 style={props}key={texto}> {texto} </animated.h3>
            );
          })}
          <img src={PensamentoCriticoImage} alt="Pensamento Crítico" />
        </PensamentoCriticoStyle>
      </Content>
    </Container>
  );
}

export default PensamentoCritico;
