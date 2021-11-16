import styled, { keyframes } from 'styled-components'

interface ClickProp {
  readonly click: boolean
}

export const Wrapper = styled.main`
  background: ${({ theme }) => theme.palette.background.default};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

export const Container = styled.div`
  padding: 2rem;
`

export const Contact = styled.a`
  color: ${({ theme }) => theme.palette.text.main};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

export const Work = styled.a<ClickProp>`
  color: ${({ theme, click }) =>
    click ? theme.palette.background.default : theme.palette.text.main};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`
export const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const About = styled.a<ClickProp>`
  color: ${({ theme, click }) =>
    click ? theme.palette.background.default : theme.palette.text.main};
  text-decoration: none;
  z-index: 1;
`

export const MySkills = styled.a`
  color: ${({ theme }) => theme.palette.text.main};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Center = styled.button<ClickProp>`
  position: absolute;
  top: ${({ click }) => (click ? '85%' : '50%')};
  left: ${({ click }) => (click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} 1.5s linear infinite;
  }

  & > :last-child {
    display: ${({ click }) => (click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`

export const DarkDiv = styled.div<ClickProp>`
  position: absolute;
  background-color: #000;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`
