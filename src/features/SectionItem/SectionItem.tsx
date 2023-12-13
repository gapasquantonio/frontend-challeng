import React from "react";
import Flex from "../../components/Flex";
import { Item } from "../../models/MenuDetails";
import styles from "./SectionItem.styles";

import ItemDetail from "../ItemDetail";
import { useAppDispatch } from "../../store/hooks";
import { closeModal } from "../../store/modal/modal.slice";
import theme from "../../theme";
import { StyledText } from "../../components/Text";
import ModalHelper from "../../helpers/modal.helper";
export interface SectionMenuComponentProps {
  sectionItemDetails: Item;
  currency: string;
  isMobile: boolean;
}

function SectionItemComponent({
  sectionItemDetails,
  currency,
  isMobile,
}: SectionMenuComponentProps) {
  const { name, description, price, images, id } = sectionItemDetails ?? {};

  const dispatch = useAppDispatch();

  const handleClosemodal = () => {
    dispatch(closeModal());
  };
  const handleOpenModal = () => {
    ModalHelper.Show({
      children: (
        <ItemDetail
          onClose={handleClosemodal}
          itemDetails={sectionItemDetails}
          currency={currency}
          isMobile={isMobile}
        />
      ),
    });
  };
  return (
    <Flex flex={1} paddingY={16} onClick={handleOpenModal}>
      <Flex flex={1} paddingRight={16} flexDirection="column">
        <Flex gap={2} alignItems="center">
          <Flex>
            <StyledText variant="h2" color={theme.colors.main}>
              {name}
            </StyledText>
          </Flex>
        </Flex>
        <Flex>
          <StyledText
            variant="body"
            css={styles.sectionItemDescription}
            color={theme.colors.brown}
          >
            {description}
          </StyledText>
        </Flex>
        <Flex>
          <StyledText
            variant="h3"
            css={styles.sectionItemDescription}
            color={theme.colors.secondary}
          >
            {currency}
            {price.toFixed(2)}
          </StyledText>
        </Flex>
      </Flex>
      {images && images.length !== 0 && (
        <Flex width={128} height={85}>
          <img src={images[0].image} />
        </Flex>
      )}
    </Flex>
  );
}

export default React.memo(SectionItemComponent);
