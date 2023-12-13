import React from "react";
import { NavbarMenuItemButton } from "./NavbarMenuItem.styles";
import StyledText from "../Text/Text";

interface NavBarMenuItemProps {
  selected: boolean;
  onClick: () => void;
  title: string;
}

function NavbarMenuItem(props: NavBarMenuItemProps) {
  const { title, selected, onClick } = props;

  return (
    <NavbarMenuItemButton onClick={onClick} selected={selected}>
      <StyledText variant="navbarMenu">{title}</StyledText>
    </NavbarMenuItemButton>
  );
}

export default React.memo(NavbarMenuItem);
