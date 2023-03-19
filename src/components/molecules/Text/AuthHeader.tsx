import Text from "@components/atoms/Text/Text";

interface AuthHeaderProps {
  text: string;
}

const AuthHeader = ({ text }: AuthHeaderProps) => {
  return (
    <Text color="white" fontSize="xxl" fontWeight="bold" mb={20} center>
      {text}
    </Text>
  );
};

export default AuthHeader;
