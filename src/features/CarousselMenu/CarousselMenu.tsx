import React, { useState } from "react";
import { MenuSection } from "../../models/MenuDetails";
import theme from "../../theme";
import { CarousellItem, Flex } from "../../components";
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
            <CarousellItem
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
