import React, { useState } from "react";
import Flex from "../../components/Flex";
import { MenuSection } from "../../models/MenuDetails";
import CarousselItem from "../../components/Button/CarousselItem";
import theme from "../../theme";
export interface CarousselMenuComponentProps {
  carousselItensList: MenuSection[];
}

function CarousselMenuComponent({
  carousselItensList,
}: CarousselMenuComponentProps) {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <Flex
      paddingX={theme.space[4]}
      paddingTop={theme.space[5]}
      paddingBottom={theme.space[6]}
      gap={theme.space[3]}
    >
      {carousselItensList &&
        carousselItensList.map((carousselItem, index) => {
          return (
            <CarousselItem
              sectionDetails={carousselItem}
              key={carousselItem.id}
              selected={selectedSection === index}
              onClick={() => setSelectedSection(index)}
            />
          );
        })}
      ;
    </Flex>
  );
}

export default React.memo(CarousselMenuComponent);
