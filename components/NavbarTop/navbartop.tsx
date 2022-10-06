import React from "react";
import styled from "styled-components";
import { YoutubeIcon } from "../icon/youtubeIcon";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 3rem;
  background: ${({ theme }) => theme.dark};
`;

const SearchInput = styled.input`
  flex: 10;
  height: 1.5rem;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  background: inherit;
  color: ${({ theme }) => theme.lightest};
`;

const SearchButton = styled.button`
  flex: 1 1 0;
  width: 3rem;
  height: 100%;
  background-color: ${({ theme }) => theme.light};
  border: none;
  cursor: pointer;
`;

const SearchField = styled.form`
  display: flex;
  align-items: center;
  width: 30rem;
  height: 80%;
  border: 1px solid ${({ theme }) => theme.light};
  background: ${({ theme }) => theme.dark};
`;

const ConnectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0.2em;
  border: 1px solid ${({ theme }) => theme.blue};
  background: none;
  color: ${({ theme }) => theme.blue};
  cursor: pointer;
`;

const ConnectText = styled.span`
  flex: 1;
  margin: 0 0.5rem;
  text-transform: uppercase;
`;

const Wrapflex = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Navbartop = () => {
  return (
    <Navbar>
      <YoutubeIcon />
      <SearchField>
        <SearchInput placeholder={"Rechercher"}></SearchInput>
        <SearchButton>🔍</SearchButton>
      </SearchField>
      <ConnectButton>
        <Wrapflex>
          <span>👨</span>
          <ConnectText>Se connecter</ConnectText>
        </Wrapflex>
      </ConnectButton>
    </Navbar>
  );
};

export default Navbartop;
