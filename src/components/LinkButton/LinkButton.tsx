import React, { ReactNode } from "react";
import { LinkButton } from "./LinkButton.styles";
import theme from "../../theme";
import { StyledText } from "..";

interface NavBarMenuItemProps {
  children: ReactNode;
  onClick: () => void;
  isDisabled: boolean;
}

function LinkButtonComponent(props: NavBarMenuItemProps) {
  const { children, onClick, isDisabled } = props;

  return (
    <LinkButton
      onClick={onClick}
      disabled={isDisabled}
      color={theme.colors.brown}
    >
      <StyledText variant="subtitle">{children}</StyledText>
    </LinkButton>
  );
}

export default React.memo(LinkButtonComponent);
