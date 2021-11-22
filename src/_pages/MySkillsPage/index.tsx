import { ThemeProvider } from 'styled-components'

import { Develope } from 'components/AllSvgs'
import { LIGHT_THEME } from 'styles'

import * as S from './styles'
import Particle from 'components/Particle'

const MySkillsPage = () => (
  <ThemeProvider theme={LIGHT_THEME}>
    <S.Wrapper>
      <Particle theme="light" />

      <S.Main>
        <S.Title>
          <Develope width={40} height={40} />
          Frontend Developer
        </S.Title>

        <S.Description>
          {
            "Hi, my name is Antonio Marcos, I've been a frontend developer for almost 3 years and a lover of technologies surrounding JavaScript."
          }
        </S.Description>

        <S.Description>
          <strong>Main technologies</strong>
          <br />
          Html, Css (Sass, Less), Bootstrap / Materialize / Material UI,
          JavaScript (TDD, BDD, E2E, ES6/7), Typescript, GraphQL, ReactJS,
          Gatsby, NextJs, Node, MongoDB, Cypress, Webpack, Git etc.
        </S.Description>
      </S.Main>
      <S.Main>
        <S.Title>
          <Develope width={40} height={40} />
          Skills
        </S.Title>

        <S.Description>
          <strong>My personal skills are:</strong>
          <ul>
            <li>
              <p>Code Review</p>
            </li>
            <li>
              <p>Logical reasoning</p>
            </li>
            <li>
              <p>Basic UI/UX</p>
            </li>
            <li>
              <p>Teamwork</p>
            </li>
            <li>
              <p>Learn Fast</p>
            </li>
            <li>
              <p>Share knowledge</p>
            </li>
          </ul>
        </S.Description>

        <S.Description>
          <strong>TOOLS:</strong>
          <br />
          VS Code, Visual Studio, Git, Github, Trello, Slack, Click Up, Notion,
          etc...
        </S.Description>
      </S.Main>
    </S.Wrapper>
  </ThemeProvider>
)

export default MySkillsPage
