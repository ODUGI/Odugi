import { memo } from "react";
import Text from "./Text";

interface ErrorTextProps {
  text: string;
}

const ErrorText = memo(({ text }: ErrorTextProps) => {
  return (
    <Text color="invite-danger" fontSize="xs" fontWeight="bold" mb={8}>
      {text}
    </Text>
  );
});

export default ErrorText;
