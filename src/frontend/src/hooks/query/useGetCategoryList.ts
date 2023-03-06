import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCategoryList = ({ communityId }: any) => {
  return useQuery(["category", { communityId }], communityApi.getCategoryList);
};

export default useGetCategoryList;
