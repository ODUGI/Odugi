import styled from "styled-components";
import CommunityLogoUpload from "../molecules/Button/CommunityLogoUpload";
import DefaultButton from "../atoms/Button/DefaultButton";
import useInput from "@hooks/common/useInput";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@store/useUserStore";
import { useState } from "react";
import BackgroundModal from "./BackgroundModal";
import communityApi from "@api/community";
import CreateCommunityText from "@components/molecules/Text/CommunityServerText";

const CreateCommunityForm = () => {
  const { userInfo } = useUserStore();
  const navigate = useNavigate();
  let formData = new FormData();
  const [img, setImg] = useState<Blob | undefined>();
  const [name, changeName] = useInput();
  const [nickName, setNickName] = useState(userInfo.name);
  const { mutate: createCommunity } = useMutation(communityApi.create, {
    onSuccess: () => {
      navigate(-1);
    },
  });

  const MakeCommunity = () => {
    formData.append("communityName", name);
    formData.append("userId", JSON.stringify(userInfo.id));
    if (!img) return 0;
    formData.append("img", img);
    formData.append(
      "profile",
      JSON.stringify({ userName: nickName, img: null, 한줄소개: "한줄소개" })
    );
    createCommunity({ formData });
    navigate(-1);
  };

  return (
    <BackgroundModal width={440} p={0} onClick={() => null}>
      <CommunityContainer>
        <CreateCommunityText />
        <CommunityLogoUpload setImg={setImg} />
        <DefaultInput value={name} onChange={changeName} type="text" />
        <Bottom>
          <DefaultButton text="만들기" onClick={() => MakeCommunity()} />
        </Bottom>
      </CommunityContainer>
    </BackgroundModal>
  );
};

export default CreateCommunityForm;

const CommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor["white"]};
`;

const Bottom = styled.div`
  width: 100%;
  height: 4rem;
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.backgroundColor["grey-7"]};
`;
