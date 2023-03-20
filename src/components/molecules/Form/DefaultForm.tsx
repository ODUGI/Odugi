import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import { forwardRef } from "react";
import styled from "styled-components";

interface DefaultFormProps {
  text: string | React.ReactElement;
  type?: string;
  formType?: "auth" | "community";
}

const DefaultForm = forwardRef<HTMLInputElement, DefaultFormProps>(
  ({ text, type = "text", formType = "auth" }, ref) => {
    return (
      <DefaultFormContainer>
        <Text
          color={formType === "auth" ? "auth-label" : "setting-tab"}
          fontWeight="bold"
          fontSize="xs"
          mb={8}
        >
          {text}
        </Text>
        <DefaultInput ref={ref} type={type} />
      </DefaultFormContainer>
    );
  }
);

const DefaultFormContainer = styled.div`
  margin-bottom: 1.25rem;
`;

export default DefaultForm;
