import React from "react";
import Flex from "../Flex";
import styles, { SearchBarInput } from "./SearchBar.styles";
import IconSearchComponent from "../../assets/icons/Search";

interface SearchBarComponentProps {
  inputPlaceholder: string;
  isMoible: boolean;
}

function SearchBarComponent(props: SearchBarComponentProps) {
  const { inputPlaceholder, isMoible } = props;

  return (
    <Flex
      css={styles.searchBarContainer(isMoible)}
      justifyContent="center"
      alignItems="center"
    >
      <Flex padding={10}>
        <IconSearchComponent />
      </Flex>
      <SearchBarInput placeholder={inputPlaceholder} />
    </Flex>
  );
}

export default React.memo(SearchBarComponent);
