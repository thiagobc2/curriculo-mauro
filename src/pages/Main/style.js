import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #a9a9a9;
`;

export const Center = styled.div`
  width: 100%;
  max-width: 1000px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona sombra */
`;

export const ContentDownload = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding-top: 20px;
`;
export const BtnDownload = styled.button`
  width: 100%;
  padding: 15px 20px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  background-color: green;
  margin-bottom: 50px;
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;

export const Section1 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  gap: 50px;
  padding: 0 50px;
  background-color: #e9e9e9;

  @media (max-width: 654px) {
    margin-left: 0;
    padding: 0;
    gap: 0;
  }
`;

export const ImgProfile = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  align-items: center;
  flex-direction: column;
  background-color: #222;
  padding: 40px 20px;

  img {
    width: 80%;
    border-radius: 50%;
    object-fit: cover;
    border: 8px solid #fff;
  }
`;

export const Name = styled.p`
  color: white;
  margin: 0;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  margin-bottom: 5px;
`;

export const Position = styled.div`
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ContentContactMeAboutMe = styled.div`
  flex: 2;
  min-width: 350px;
  margin: 0;
  @media (max-width: 654px) {
    padding: 0 50px;
  }
`;

export const ContactMe = styled.div``;

export const ItemContact = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  gap: 10px;
  margin-bottom: 8px;
  word-wrap: break-word;

  @media (max-width: 541px) {
    font-size: 14px;
  }
  svg {
    font-size: 30px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #222;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Aboutme = styled.div`
  flex: 1;
  page-break-inside: avoid;
`;

export const Section2 = styled.div`
  flex: 2;
  min-width: 300px;
  padding: 0 50px 50px 50px;
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CircleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #222;
`;

export const CircleIcoInvert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #222;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
`;

export const SubTitle = styled.h2``;

export const Info = styled.div`
  color: #333;
  font-size: 18px;
  text-align: justify;
  margin-bottom: 50px;
`;

export const InfoInvert = styled.div`
  color: #fff;
  font-size: 15px;
  text-align: justify;
  margin-top: 20px;
  margin-bottom: 50px;
`;
