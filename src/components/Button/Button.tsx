import React, { ReactNode } from "react";
import { Button } from "./Button.styles";

interface NavBarMenuItemProps {
  children: ReactNode;
  onClick: () => void;
  isDisabled: boolean;
  className?: string;
}

function ButtonComponent(props: NavBarMenuItemProps) {
  const { children, onClick, isDisabled, className } = props;

  return (
    <Button onClick={onClick} css={className} disabled={isDisabled}>
      {children}
    </Button>
  );
}

export default React.memo(ButtonComponent);
