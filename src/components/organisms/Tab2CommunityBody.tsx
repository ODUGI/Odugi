import CommunityLabel from "../molecules/Div/CommunityLabel";
import CommunityRoomButton from "../molecules/Div/CommunityRoomButton";
import { useNavigate, useParams } from "react-router-dom";
import useGetChannelList from "@hooks/query/useGetChannelList";
import UserChannelOnBox from "@components/molecules/Div/UserChannelOnBox";
import { useUserStore } from "@store/useUserStore";
import UserFriendChannelOnBox from "@components/molecules/Div/UserFriendChannelOnBox";
import useGetFriendList from "@hooks/query/useGetFriendList";

interface ChannelType {
  channel_id: number;
  channel_name: string;
}

interface RoomType {
  type: number;
  category_id: number;
  channel_id: number;
  channel_name: string;
}

const Tab2CommunityBody = () => {
  const navigate = useNavigate();
  const { communityId, channelId } = useParams();

  const { data: res, isSuccess } = useGetChannelList({
    communityId,
  });
  const { userInfo } = useUserStore();
  const { data: friendList } = useGetFriendList(userInfo.email);

  const data = res?.data?.data;
  if (!communityId || !isSuccess) return <></>;

  const List = JSON.parse(JSON.stringify(data[0])).split("},");
  const List2 = JSON.parse(JSON.stringify(data[1])).split("},");
  const channelList: ChannelType[] = [];
  const roomList: RoomType[] = [];

  if (List.length > 0 && channelList.length < List?.length) {
    for (let i = 0; i < List?.length; i++) {
      if (i !== List.length - 1) {
        channelList.push(JSON.parse(List[i] + "}"));
      } else {
        channelList.push(JSON.parse(List[i]));
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

  if (!channelId) {
    let id;
    for (let i = 0; i < roomList.length; i++) {
      if (roomList[i]["type"] === 2) {
        id = roomList[i]["channel_id"];
        break;
      }
    }
    navigate(`/${channelId}/${id}`);
  }

  return (
    <div>
      {channelList.map((channel: any) => (
        <>
          <CommunityLabel text={channel["channel_name"]} />
          {roomList
            .filter((room) => room["channel_id"] === channel["channel_id"])
            .map((room) => (
              <>
                <CommunityRoomButton
                  type={room["type"] === 1 ? "voice" : "chat"}
                  text={room["channel_name"]}
                  communityId={communityId}
                  channelId={room["channel_id"]}
                />
                {room["channel_id"] === Number(channelId) && (
                  <UserChannelOnBox />
                )}
                {friendList.map((friend: FriendType) => (
                  <UserFriendChannelOnBox
                    friend={friend}
                    channelId={room["channel_id"]}
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
