import styled from 'styled-components'

export const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${({ theme }) => theme.palette.background.default};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
`
