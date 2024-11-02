import styled from "styled-components";

export const Container = styled.div`
  page-break-inside: avoid;
  break-inside: avoid;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Company = styled.div`
  color: #222;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const Period = styled.div`
  font-weight: bold;
  font-size: 16px;
  font-weight: bold;
`;

export const Position = styled.div`
  color: #222;
  font-size: 16px;
  font-style: italic;
  letter-spacing: 1px;
  margin-bottom: 10px;
  page-break-inside: avoid;
`;
export const Ecosystem = styled.p`
  color: #222;
  font-size: 12px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;
export const Description = styled.div`
  font-size: 14px;
  text-align: justify;
  margin-bottom: 30px;
`;

export const ContentItems = styled.div`
  margin-top: -20px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  font-size: 14px;
  margin-left: 40px;
  text-align: justify;
  margin-bottom: 10px;
`;
