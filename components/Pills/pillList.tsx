import React, { FC } from "react";
import styled from "styled-components";
import Pill from "./Pill/pill";

const PillListRoot = styled.ul`
  display: inline-block;
`;

const PillList: FC<{
  pills: string[];
}> = ({ pills }) => {
  return !!pills ? (
    <PillListRoot>
      {pills.map((pill) => (
        <Pill key={pill} color={"green"}>
          {pill}
        </Pill>
      ))}
    </PillListRoot>
  ) : null;
};

export default PillList;
