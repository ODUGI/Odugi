import { useMutation } from "@tanstack/react-query";
import userSettingApi from "@api/userSetting";

const useUpdateUserNameInCommunity = () => {
  return useMutation(userSettingApi.updateCommunityName);
};

export default useUpdateUserNameInCommunity;
