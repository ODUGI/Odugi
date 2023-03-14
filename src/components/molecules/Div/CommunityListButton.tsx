import CommunityImage from "@components/atoms/Div/CommunityLogo";
import styled from "styled-components";

const CommunityListButton = () => {
  return (
    <CommunityContainer>
      <CommunityImage avatarHeight={3} avatarWidth={3} id={1} name="서버1" />
      <Alarm>+999</Alarm>
      {/* 999 이상이면 +999로 띄워주기*/}
    </CommunityContainer>
  );
};

const Alarm = styled.div`
  height: 1rem;
  padding-left: 6px;
  padding-right: 6px;
  background-color: red;
  position: absolute;
  top: 2rem;
  right: -0.1rem;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  box-sizing: content-box;
  border-radius: 1rem;
  color: white;
  text-align: center;
  line-height: 1rem;
  /* border: 1px black solid; */
`;

const CommunityContainer = styled.div`
  width: 3rem;
  height: 3rem;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  position: relative;
`;

export default CommunityListButton;
