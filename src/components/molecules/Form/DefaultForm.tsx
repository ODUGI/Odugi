import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import { forwardRef, ReactNode } from "react";
import styled from "styled-components";

interface DefaultFormProps {
  type?: string;
  formType?: "auth" | "community";
  children: ReactNode;
}

const DefaultForm = forwardRef<HTMLInputElement, DefaultFormProps>(
  ({ type = "text", formType = "auth", children }, ref) => {
    return (
      <DefaultFormContainer>
        <Text
          color={formType === "auth" ? "auth-label" : "setting-tab"}
          fontWeight="bold"
          fontSize="xs"
          mb={8}
        >
          {children}
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
