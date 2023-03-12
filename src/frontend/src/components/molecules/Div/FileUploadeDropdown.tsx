import DropdownContainer from "@components/atoms/Div/DropdownContainer";
import UploadIcon from "@components/atoms/Icons/UploadIcon";
import Text from "@components/atoms/Text/Text";
import styled from "styled-components";

const FileUploadeDropdown = () => {
  return (
    <DropdownContainer width={200} top={-60}>
      <FileUploadModalWrapper>
        <UploadIconWrapper onClick={() => null}>
          <UploadIcon />
        </UploadIconWrapper>
        <Text text="파일 업로드" fontSize="sm" />
      </FileUploadModalWrapper>
    </DropdownContainer>
  );
};

const UploadIconWrapper = styled.div``;

const FileUploadModalWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.color["auth-desc"]};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.backgroundColor.primary};
  }
`;

export default FileUploadeDropdown;
