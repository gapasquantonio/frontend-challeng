import styled from "@emotion/styled";

export type NavbarMenuItemButtonProps = {
  selected: boolean;
};
export const NavbarMenuItemButton = styled.a<NavbarMenuItemButtonProps>`
  border-bottom: ${({ selected }) => (selected ? "5px solid" : "")};
`;
