import React from "react";
import styles from "./CarousselItemComponent.styles";
import Flex from "../../Flex";
import { MenuSection } from "../../../models/MenuDetails";
import { StyledText } from "../../Text";

interface NavBarMenuItemProps {
  selected: boolean;
  sectionDetails: Omit<MenuSection, "items">;
  onClick: () => void;
}

function NavbarMenuItem(props: NavBarMenuItemProps) {
  const { selected, sectionDetails, onClick } = props;
  const { name, images } = sectionDetails;

  return (
    <Flex
      width={104}
      height={146}
      flexDirection="column"
      alignItems="center"
      onClick={onClick}
    >
      {images[0]?.image && (
        <Flex>
          <img
            css={styles.carousselItemBadge(selected)}
            src={images[0]?.image}
          />
        </Flex>
      )}
      <Flex
        paddingTop="16px"
        paddingBottom="8px"
        height="38px"
        alignItems="center"
        css={styles.carousselText(selected)}
      >
        <StyledText variant="h5">{name}</StyledText>
      </Flex>
    </Flex>
  );
}

export default React.memo(NavbarMenuItem);
