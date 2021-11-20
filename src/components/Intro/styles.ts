import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${({ theme }) => theme.palette.background.default} 50%,
        ${({ theme }) => theme.palette.text.main} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${({ theme }) => theme.palette.background.default} 50%,
        ${({ theme }) => theme.palette.text.main} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${({ theme }) => theme.palette.background.default};
  border-right: 2px solid ${({ theme }) => theme.palette.text.main};
  z-index: 1;
`

export const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
    max-width: 20rem;
  }
`

export const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${({ theme }) => theme.palette.background.default};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > * :last-child {
    color: ${({ theme }) =>
      `rgba(${theme.palette.background.defaultRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`
