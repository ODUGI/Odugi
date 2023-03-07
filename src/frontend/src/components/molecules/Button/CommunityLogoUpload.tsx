import CameraIcon from "@components/atoms/Icons/CameraIcon";
import CommunityAddIcon from "@components/atoms/Icons/CommunityAddIcon";
import Text from "@components/atoms/Text/Text";
import styled from "styled-components";

const CommunityLogoUpload = ({ setImg }: any) => {
  const onSelectFile = async (event: any) => {
    const junk = event.target.files[0];
    setImg(junk);
  };

  return (
    <Wrapper>
      <StyledBorder>
        <CameraIcon />
        <Text
          text={"UPLOAD"}
          color={"black"}
          fontWeight={"bold"}
          fontSize={"xs"}
        />
        <CommunityAddIcon />
        <input
          type="file"
          tabIndex={0}
          onChange={onSelectFile}
          accept=".jpg,.jpeg,.png,.gif"
        />
      </StyledBorder>
    </Wrapper>
  );
};

export default CommunityLogoUpload;

const Wrapper = styled.div`
  width: 80px;
  .button {
    width: 100px;
  }
`;

const StyledBorder = styled.div`
  display: flex;
  justify-content: center;
  /* border 커스터마이징 안된다고 해서 만들어주는 사이트에서 들고와봄 */
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23333' stroke-width='4' stroke-dasharray='5%2c 13' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 100px;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 80px;
  height: 80px;
  .CameraIcon {
    color: ${({ theme }) => theme.color["grey-1"]};
  }
  input {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    font-size: 0px;
  }
`;
