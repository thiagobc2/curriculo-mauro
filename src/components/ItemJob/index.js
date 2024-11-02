import React from "react";

import * as S from "./style";

export default function ItemJob(props) {
  return (
    <S.Container>
      <S.Row>
        {props.company && <S.Company>{props.company}</S.Company>}
        {props.period && <S.Period>{props.period}</S.Period>}
      </S.Row>
      {props.position && <S.Position>{props.position}</S.Position>}
      {props.ecosystem && <S.Ecosystem>({props.ecosystem})</S.Ecosystem>}
      {props.description && <S.Description>{props.description}</S.Description>}
      {props.items && (
        <S.ContentItems>
          <ul>
            {props.items.map((item) => (
              <S.Item>{item}</S.Item>
            ))}
          </ul>
        </S.ContentItems>
      )}
    </S.Container>
  );
}
