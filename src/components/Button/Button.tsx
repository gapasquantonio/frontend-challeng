import React, { ReactNode } from "react";
import { Button } from "./Button.styles";
import theme from "../../theme";

interface NavBarMenuItemProps {
  children: ReactNode;
  onClick: () => void;
  isDisabled: boolean;
  className?: string;
}

function ButtonComponent(props: NavBarMenuItemProps) {
  const { children, onClick, isDisabled, className } = props;

  return (
    <Button
      onClick={onClick}
      css={className}
      disabled={isDisabled}
      color={theme.colors.brown}
    >
      {children}
    </Button>
  );
}

export default React.memo(ButtonComponent);
