import { StarIcon } from "@chakra-ui/icons";
import { Box, Icon } from "@chakra-ui/react";

interface Props {
    rarity: string;
}

function RarityDisplay({rarity: rarity}: Props) {
  let startNum;
  if (rarity === "4_star") {
    startNum = 4;
  } else {
    startNum = 5;
  }
  const elements = [];
  for (let i = 0; i < startNum; i++) {
    elements.push(<Icon as={StarIcon} boxSize={6} color="yellow.100" />);
  }

  return (
    <Box>
        {elements}
    </Box>
  );
}

export default RarityDisplay;
