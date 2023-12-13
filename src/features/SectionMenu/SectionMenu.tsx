import React from "react";
import Flex from "../../components/Flex";
import { MenuSection } from "../../models/MenuDetails";
import SectionItem from "../SectionItem";
import { useAppSelector } from "../../store/hooks";
import { selectSelectedRestaurantDetails } from "../../store/restaurant/restaurant.slice";
import { StyledText } from "../../components/Text";
import theme from "../../theme";
import { ArrowIcon } from "../../assets/icons";
export interface SectionMenuComponentProps {
  sectionMenuDetails: MenuSection;
  isMobile: boolean;
}

function SectionMenuComponent({
  sectionMenuDetails,
  isMobile,
}: SectionMenuComponentProps) {
  const { name = "tese", items } = sectionMenuDetails ?? {};
  const restaurantDetails = useAppSelector(selectSelectedRestaurantDetails);

  return (
    <Flex flexDirection="column">
      <Flex
        paddingTop={theme.space[8]}
        paddingBottom={theme.space[3]}
        justifyContent="space-between"
      >
        <StyledText variant="h1" color={theme.colors.main}>
          {name}
        </StyledText>
        <ArrowIcon />
      </Flex>
      <Flex flexDirection="column">
        {items.map((item) => {
          return (
            <SectionItem
              key={item.id}
              sectionItemDetails={item}
              currency={String(restaurantDetails?.currency)}
              isMobile={isMobile}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

export default React.memo(SectionMenuComponent);
