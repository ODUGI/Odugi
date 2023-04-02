import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCommunityList = ({ userId }: any) => {
  const [list, setList] = useState([]);
  const { data: res } = useQuery(
    ["communityList", userId],
    communityApi.getList
  );

  return res.data.data;
};

export default useGetCommunityList;
