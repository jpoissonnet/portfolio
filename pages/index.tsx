import type {NextPage} from "next";
import styled from "styled-components";
import Navbartop from "../components/NavbarTop/navbartop";

const Container = styled.div`
  margin: 0 2rem;
`;

const Home: NextPage = () => {
    return (<>
            <Navbartop/>
            <Container>
            </Container>
        </>
    );
};

export default Home;
