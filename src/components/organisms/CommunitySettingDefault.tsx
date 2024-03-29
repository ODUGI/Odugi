import Text from "../atoms/Text/Text";
import SettingWrapper from "./SettingWrapper";
import FieldButton from "../atoms/Button/FieldButton";
import styled from "styled-components";
import ImageUploadButton from "../molecules/Button/ImageUploadButton";
import { useCallback, useRef, useState } from "react";
import { useUserStore } from "@store/useUserStore";
import { useParams } from "react-router-dom";
import useDeleteCommunity from "@hooks/query/useDeleteCommunity";
import useModifyCommunityImage from "@hooks/query/useModifyCommunityImage";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import useUpdateCommunityName from "@hooks/query/useUpdateCommunityName";

const CommunitySettingDefault = () => {
  let formData = new FormData();
  const { communityId } = useParams();
  const { userInfo } = useUserStore();

  const [img, setImg] = useState();
  const nameRef = useRef<HTMLInputElement>(null);

  const { mutate: updateCommunityName } = useUpdateCommunityName();
  const { mutate: modifyImage } = useModifyCommunityImage();
  const { mutate: deleteCommunity } = useDeleteCommunity({
    communityId,
  });

  const changeCommunityName = useCallback(() => {
    if (nameRef.current)
      updateCommunityName({
        communityName: nameRef.current.value,
        communityId,
        userId: userInfo.id,
      });
  }, [nameRef]);

  const removeCommunity = useCallback(() => {
    if (!communityId) return;
    deleteCommunity({ communityId, userId: userInfo.id });
  }, []);

  const changeImage = useCallback(() => {
    if (!communityId || !img) return;

    formData.append("communityId", communityId);
    formData.append("userId", JSON.stringify(userInfo.id));
    formData.append("img", img);

    modifyImage({ formData });
  }, [img]);

  return (
    <SettingWrapper>
      <Text color="white" fontWeight="bold" fontSize="xl" mb={20}>
        서버 개요
      </Text>
      <Summary>
        <LeftSide>
          <Text color="auth-desc" fontSize="sm">
            서버 이미지 해상도는 최소 512*512를 추천해요.
          </Text>
          <Text color="auth-desc" fontSize="xxs" mb={20}>
            최소 크기: 128*128
          </Text>
          <Mini>
            <ImageUploadButton setImg={setImg} />
          </Mini>
          <ButtonWrapper>
            <FieldButton text="아바타 변경하기" onClick={changeImage} />
          </ButtonWrapper>
        </LeftSide>
      </Summary>
      <DefaultInput ref={nameRef} height={48} type="text" />
      <ButtonWrapper>
        <FieldButton text="서버이름 변경하기" onClick={changeCommunityName} />
      </ButtonWrapper>
      <ButtonWrapper>
        <FieldButton
          text="서버 삭제하기"
          onClick={removeCommunity}
          backgroundColor="voice-hangup"
          fontWeight="bold"
        />
      </ButtonWrapper>
    </SettingWrapper>
  );
};

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

export default CommunitySettingDefault;
