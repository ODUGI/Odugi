// import { Children } from "react";
import { Tooltip as ToolTipComponent } from "@mui/material";
import { ReactElement, memo } from "react";

interface ToolTipProps {
  children: ReactElement;
  title: String;
  place?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
    | undefined;
}

const ToolTip = memo(({ children, title, place }: ToolTipProps) => {
  return (
    <ToolTipComponent
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "#000",
          },
        },
        arrow: {
          sx: {
            color: "#000",
          },
        },
      }}
      arrow
      title={title}
      placement={place}
    >
      {children}
    </ToolTipComponent>
  );
});

export default ToolTip;
