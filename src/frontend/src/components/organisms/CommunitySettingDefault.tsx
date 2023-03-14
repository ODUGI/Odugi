import Text from "../atoms/Text/Text";
import SettingWrapper from "./SettingWrapper";
import FieldButton from "../atoms/Button/fieldButton";
import styled from "styled-components";
import CommunityInput from "../molecules/Input/CommunityInput";
import DefaultForm from "@components/molecules/Form/DefaultForm";
import ImageUploadButton from "../molecules/Button/ImageUploadButton";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@store/useUserStore";
import { useParams } from "react-router-dom";
import useInput from "@hooks/common/useInput";
import useDeleteCommunity from "@hooks/query/useDeleteCommnunity";
import communityApi from "@api/community";
import useModifyCommunityImage from "@hooks/query/useModifyCommunityImage";
import DefaultInput from "@components/atoms/Input/DefaultInput";

const CommunitySettingDefault = () => {
  let formData = new FormData();
  const { communityId } = useParams();
  const { userInfo } = useUserStore();

  const [img, setImg] = useState();
  const [name, changeName] = useInput();

  const { mutate: modifyImage } = useModifyCommunityImage();
  const { mutate: updateCommunityName } = useMutation(communityApi.update);
  const { mutate: deleteCommunity } = useDeleteCommunity();

  const onChangeName = () => {
    updateCommunityName({
      communityName: name,
      communityId,
      userId: userInfo.id,
    });
  };

  const DeleteCommunity = () => {
    if (!communityId) return;

    deleteCommunity({ communityId, userId: userInfo.id });
    window.location.replace("/@me");
  };

  const changeImage = () => {
    if (!communityId || !img) return;

    formData.append("communityId", communityId);
    formData.append("userId", JSON.stringify(userInfo.id));
    formData.append("img", img);

    modifyImage({ formData });
  };

  return (
    <SettingWrapper>
      <Text
        text={"서버 개요"}
        color="white"
        fontWeight="bold"
        fontSize="xl"
        mb={20}
      />
      <Summary>
        <LeftSide>
          <Text
            text={"서버 이미지 해상도는 최소 512*512를 추천해요."}
            color="auth-desc"
            fontSize="sm"
          />
          <Text
            text={"최소 크기: 128*128"}
            color="auth-desc"
            fontSize="xxs"
            mb={20}
          />
          <Mini>
            <ImageUploadButton setImg={setImg} />
          </Mini>
          <ButtonWrapper>
            <FieldButton text="아바타 변경하기" onClick={changeImage} />
          </ButtonWrapper>
        </LeftSide>
        <RightSide></RightSide>
      </Summary>
      <DefaultInput
        height="48"
        value={name}
        onChange={changeName}
        type="text"
      />
      <ButtonWrapper>
        <FieldButton text="서버이름 변경하기" onClick={changeImage} />
      </ButtonWrapper>
      <ButtonWrapper>
        <FieldButton
          text="서버 삭제하기"
          onClick={DeleteCommunity}
          backgroundColor="voice-hangup"
          fontWeight="bold"
        />
      </ButtonWrapper>
    </SettingWrapper>
  );
};

export default CommunitySettingDefault;

const ButtonWrapper = styled.div`
  width: 140px;
  height: 40px;
  margin-top: 0.5rem;
`;
const Summary = styled.div`
  width: 100%;
  height: auto;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Mini = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
`;
const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
`;
