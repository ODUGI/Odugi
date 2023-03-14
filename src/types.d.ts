interface UserInfoType {
  id: number;
  email: string;
  name: string;
  introduction: string;
  profileImagePath: string;
  createdAt: string;
}

type FriendStateType = "REQUEST" | "WAIT" | "ACCEPTED";

interface FriendType {
  userId: number;
  name: string;
  email: string;
  friendState: FriendStateType;
  channelId: string;
  createdAt: Date;
  profileImagePath: string;
}

type UserSettingType = "내 계정" | "프로필" | "알림";
type CommunitySettingType = "일반" | "멤버" | "초대";
type SettingBarType =
  | null
  | "내 계정"
  | "프로필"
  | "알림"
  | "일반"
  | "멤버"
  | "초대";
