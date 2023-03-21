import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCategoryList = ({ communityId }: any) => {
  const { data } = useQuery(
    ["categoryList", { communityId }],
    communityApi.getCategoryList
  );
  if (!data?.data?.data) return [];
  return data?.data?.data;
};

export default useGetCategoryList;
