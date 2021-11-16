import styled from 'styled-components'

export const Logo = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.palette.text.main};
  font-family: ${({ theme }) => theme.font.family_3};

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`
