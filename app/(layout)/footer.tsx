"use client";
import styled from "styled-components";

const FooterWrap = styled.footer`
  margin: 2rem 0;
  padding: 2rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  color: ${({ theme }) => theme.lightest};
  letter-spacing: -0.5px;
`;

const Footer = () => (
  <FooterWrap>
    Made with <span>❤️</span> by Jules.
  </FooterWrap>
);

export default Footer;
