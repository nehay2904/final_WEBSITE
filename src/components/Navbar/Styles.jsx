import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: black;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
  position: fixed;
`;

export const Nav = styled(motion.nav)`
  background-color:  black;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:1
`;

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 0rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)`
`;
