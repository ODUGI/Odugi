import CommunityLabel from "../molecules/Div/CommunityLabel";
import CommunityRoomButton from "../molecules/Div/CommunityRoomButton";
import { useNavigate, useParams } from "react-router-dom";
import useGetCategoryList from "@hooks/query/useGetCategoryList";
import UserChannelOnBox from "@components/molecules/Div/UserChannelOnBox";
import { useUserStore } from "@store/useUserStore";
import UserFriendChannelOnBox from "@components/molecules/Div/UserFriendChannelOnBox";
import useGetFriendList from "@hooks/query/useGetFriendList";

interface CategoryType {
  category_id: number;
  category_name: string;
}

interface RoomType {
  type: number;
  channel_id: number;
  category_id: number;
  channel_name: string;
}

const Tab2CommunityBody = () => {
  const navigate = useNavigate();
  const { communityId, categoryId } = useParams();
  const { data: res, isSuccess } = useGetCategoryList({
    communityId,
  });
  const { userInfo } = useUserStore();
  const { data: friendList } = useGetFriendList(userInfo.email);

  const data = res?.data?.data;
  if (!communityId || !isSuccess) return <></>;

  const List = JSON.parse(JSON.stringify(data[0])).split("},");
  const List2 = JSON.parse(JSON.stringify(data[1])).split("},");
  const categoryList: CategoryType[] = [];
  const roomList: RoomType[] = [];

  if (List.length > 0 && categoryList.length < List?.length) {
    for (let i = 0; i < List?.length; i++) {
      if (i !== List.length - 1) {
        categoryList.push(JSON.parse(List[i] + "}"));
      } else {
        categoryList.push(JSON.parse(List[i]));
      }
    }
  }
  if (List2.length > 0 && roomList.length < List2?.length) {
    for (let i = 0; i < List2?.length; i++) {
      if (i !== List2.length - 1) {
        roomList.push(JSON.parse(List2[i] + "}"));
      } else {
        roomList.push(JSON.parse(List2[i]));
      }
    }
  }

  if (!categoryId) {
    let id;
    for (let i = 0; i < roomList.length; i++) {
      if (roomList[i]["type"] === 2) {
        id = roomList[i]["channel_id"];
        break;
      }
    }
    navigate(`/${categoryId}/${id}`);
  }

  return (
    <div>
      {categoryList.map((category: any) => (
        <>
          <CommunityLabel text={category["category_name"]} />
          {roomList
            .filter((room) => room["category_id"] === category["category_id"])
            .map((room) => (
              <>
                <CommunityRoomButton
                  type={room["type"] === 1 ? "voice" : "chat"}
                  text={room["channel_name"]}
                  communityId={communityId}
                  categoryId={room["category_id"]}
                />
                {room["category_id"] === Number(categoryId) && (
                  <UserChannelOnBox />
                )}
                {friendList.map((friend: FriendType) => (
                  <UserFriendChannelOnBox
                    friend={friend}
                    categoryId={room["category_id"]}
                  />
                ))}
              </>
            ))}
        </>
      ))}
    </div>
  );
};

export default Tab2CommunityBody;
