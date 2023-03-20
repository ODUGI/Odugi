import Text from "@components/atoms/Text/Text";
import { memo } from "react";

interface AuthHeaderProps {
  text: string;
}

const AuthHeader = memo(({ text }: AuthHeaderProps) => (
  <Text color="white" fontSize="xxl" fontWeight="bold" mb={20} center>
    {text}
  </Text>
));

export default AuthHeader;
