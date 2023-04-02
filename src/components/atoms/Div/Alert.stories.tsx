import Alert from "./Alert";
import { withKnobs, text } from "@storybook/addon-knobs";

// export default {
//   title: "atoms/Div",
//   component: DivAlert,
// };

// export const Alert = () => (
//   const alertText = text('text', "정말 삭제하시겠습니까?");
//   return(
//   <DivAlert text="정말 GDSC KNU 2-Frontend Study 3팀 채널을 삭제하시겠어요? 삭제된 채널은 복구할 수 없어요." />
// );

export default {
  title: "atoms/Div/Alert",
  component: Alert,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const alert = () => {
  const alertText = text("alertText", "취소 하시겠습니까?");
  return <Alert text={alertText} />;
};
