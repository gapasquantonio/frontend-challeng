import React, { useState } from "react";
import Flex from "../../components/Flex";
import { MenuSection } from "../../models/MenuDetails";
import CarousselItem from "../../components/CarousselItem";
export interface CarousselMenuComponentProps {
  carousselItensList: MenuSection[];
}

function CarousselMenuComponent({
  carousselItensList,
}: CarousselMenuComponentProps) {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <Flex paddingX={16} paddingTop={20} paddingBottom={24} gap={12}>
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
