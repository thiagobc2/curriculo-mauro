import React from "react";

import * as S from "./style";

export default function ListRating(props) {
  return (
    <S.Container>
      {props.items?.map((item) => (
        <S.Item key={item}>
          {item.name}
          <progress
            value={item.rating < 5 ? item.rating : 5}
            max={5}
          ></progress>
        </S.Item>
      ))}
    </S.Container>
  );
}
