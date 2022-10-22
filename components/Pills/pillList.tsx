import React, { FC } from "react";
import styled from "styled-components";
import Pill from "./Pill/pill";

const PillListRoot = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PillList: FC<{
  pills: any[];
}> = ({ pills }) => {
  return !!pills ? (
    <PillListRoot>
      {pills.map((pill) => {
        let pillKey, pillColor;
        if (pill[0].length > 1) {
          pillKey = pill[0];
          pillColor = pill[1];
        } else {
          pillKey = pill;
          pillColor = null;
        }
        return (
          <Pill key={pillKey} color={pillColor}>
            {pillKey}
          </Pill>
        );
      })}
    </PillListRoot>
  ) : null;
};

export default PillList;
