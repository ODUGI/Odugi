import LogoImage from "@components/atoms/Div/LogoImage";
import Status from "@components/atoms/Div/Status";
import styled from "styled-components";
import mask32 from "../../../assets/mask/avatar-mask-32.png";
import mask80 from "../../../assets/mask/avatar-mask-80.png";

interface UserStateProps {
  status: "0" | "1" | "2" | "3";
  fontSize?: string;
  src?: string;
  type: "s" | "m";
}

const UserState = ({
  src = "",
  status,
  fontSize = "16px",
  type,
}: UserStateProps) => {
  return (
    <UserStateContainer>
      <Mask type={type}>
        <LogoImage
          height={type === "s" ? 2 : 5}
          width={type === "s" ? 2 : 5}
          src={src}
          onClick={() => null}
        />
      </Mask>
      <IconWrapper type={type}>
        <Status status={status} fontSize={type === "s" ? "16px" : "24px"} />
      </IconWrapper>
    </UserStateContainer>
  );
};

const UserStateContainer = styled.div`
  position: relative;
`;

interface TypeProps {
  type: "s" | "m";
}

const Mask = styled.div<TypeProps>`
  width: ${({ type }) => (type === "s" ? 32 : 80)}px;
  height: ${({ type }) => (type === "s" ? 32 : 80)}px;
  mask-image: url(${({ type }) => (type === "s" ? mask32 : mask80)});
  mask-size: contain;
  mask-repeat: no-repeat;
`;

const IconWrapper = styled.div<TypeProps>`
  position: absolute;
  transform: ${({ type }) =>
    type === "s" ? "translate(120%, -70%)" : "translate(230%, -95%)"};
  border-radius: 25px;
`;

export default UserState;
