import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCommunityList = () => {
  const { data: res } = useQuery(["communityList"], communityApi.getList);

  // useEffect(() => {
  if (!res?.data?.data) return [];

  // const List = (res as any)?.data.data || [];
  // if (List[0] === "") {
  //   return setList([]);
  // }

  // const parsedData: any = [];
  // if (List.length > 0) {
  //   for (let i = 0; i < List?.length; i++) {
  //     if (i !== List.length - 1) {
  //       parsedData.push(JSON.parse(List[i] + "}"));
  //     } else {
  //       parsedData.push(JSON.parse(List[i]));
  //     }
  //   }
  // }

  // setList(parsedData);
  // setList(res.data.data);
  return res.data.data;
  // }, [res]);
};

export default useGetCommunityList;
