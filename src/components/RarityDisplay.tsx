import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

function RarityDisplay({rarity}: {rarity?: string}) {
  let startNum;
  if (rarity === "4_star") {
    startNum = 4;
  } else {
    startNum = 5;
  }
  const elements = [];
  for (let i = 0; i < startNum; i++) {
    elements.push(<StarIcon color="#F7CE55" key={i} margin={2}/>);
  }

  return (
    <Box>
        {elements}
    </Box>
  );
}

export default RarityDisplay;
