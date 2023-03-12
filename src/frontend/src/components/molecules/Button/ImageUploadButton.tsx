import CameraIcon from "@components/atoms/Icons/CameraIcon";
import CommunityAddIcon from "@components/atoms/Icons/CommunityAddIcon";
import Text from "@components/atoms/Text/Text";
import { useState } from "react";
import styled from "styled-components";

const ImageUploadButton = ({ setImg }: any) => {
  const [image, setImage] = useState<null | File>(null);

  const onSelectFile = async (event: any) => {
    const junk = event.target.files[0];
    setImg(junk);
    setImage(junk);
  };

  return (
    <UploadContainer>
      {image ? (
        <ImageContainer image={URL.createObjectURL(image)} />
      ) : (
        <UploadWrapper>
          <CameraIcon />
          <Text text="UPLOAD" color="white" fontWeight="bold" fontSize="xs" />
          <CommunityAddIcon />
          <input
            type="file"
            tabIndex={0}
            onChange={onSelectFile}
            accept=".jpg,.jpeg,.png,.gif"
          />
        </UploadWrapper>
      )}
    </UploadContainer>
  );
};

export default ImageUploadButton;

const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .button {
    width: 100px;
  }
`;

const ImageContainer = styled.div<{ image: string }>`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  border-radius: 100px;
`;

const UploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* border 커스터마이징 안된다고 해서 만들어주는 사이트에서 들고와봄 */
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23aaa' stroke-width='4' stroke-dasharray='5%2c 13' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 100px;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 80px;
  height: 80px;

  color: ${({ theme }) => theme.color["tab3-header"]};

  svg:first-child {
    color: ${({ theme }) => theme.color["tab3-header"]};
  }

  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    font-size: 0px;
  }
`;
