import ToolTipDiv from "./ToolTip";

export default {
  title: "atoms/div",
  component: ToolTipDiv,
};

export const Tooltip = () => (
  <ToolTipDiv place="right" title="test">
    <button>hello</button>
  </ToolTipDiv>
);
