import { useQuery } from "@tanstack/react-query";

const useInviteFriend = () => {
  const { data, isSuccess } = useQuery(["friendList"]);
};

export default useInviteFriend;
