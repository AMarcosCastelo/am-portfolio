import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.palette.background};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const Main = styled.div`
  border: 2px solid ${({ theme }) => theme.palette.text.main};
  color: ${({ theme }) => theme.palette.text.main};
  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${({ theme }) => theme.palette.background.default};
    background-color: ${({ theme }) => theme.palette.text.main};
  }
`

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${({ theme }) => theme.palette.background.default};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`

export const Description = styled.div`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: calc(0.5rem + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${({ theme }) => theme.palette.background.default};
  }
`
