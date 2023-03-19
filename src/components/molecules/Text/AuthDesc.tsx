import Text from "@components/atoms/Text/Text";
import { memo } from "react";

interface AuthDescProps {
  text: string;
}

const AuthDesc = memo(({ text }: AuthDescProps) => (
  <Text color="auth-desc" mb={20} center>
    {text}
  </Text>
));

export default AuthDesc;
