import { useMutation } from "@tanstack/react-query";
import userSettingApi from "@api/userSetting";

const useChangeUserImage = () => {
  return useMutation(userSettingApi.modifyImage);
};

export default useChangeUserImage;
