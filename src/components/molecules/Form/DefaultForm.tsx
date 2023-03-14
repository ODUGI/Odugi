import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import { ChangeEvent } from "react";
import styled from "styled-components";

interface DefaultFormProps {
  text: string | React.ReactElement;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  formType?: "auth" | "community";
}

const DefaultForm = ({
  text,
  value,
  onChange,
  type = "text",
  formType = "auth",
}: DefaultFormProps) => {
  return (
    <DefaultFormContainer>
      <Text
        text={text}
        color={formType === "auth" ? "auth-label" : "setting-tab"}
        fontWeight="bold"
        fontSize="xs"
        mb={8}
      />
      <DefaultInput value={value} onChange={onChange} type={type} />
    </DefaultFormContainer>
  );
};

const DefaultFormContainer = styled.div`
  margin-bottom: 1.25rem;
`;

export default DefaultForm;
