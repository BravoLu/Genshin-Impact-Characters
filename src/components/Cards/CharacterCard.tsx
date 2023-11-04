import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";
import RarityDisplay from "../RarityDisplay";

export interface Characters {
  results: CharacterInfo[];
  pages?: number;
  totalPage?: number;
  totalResult?: number;
}

export interface CharacterInfo {
  id: number;
  name: string;
  rarity: string;
  weapon: string;
  vision: string;
  title?: string[];
  modelType?: string;
  birthday?: string;
}

function CharacterCard({
  name: name,
  vision: vision,
  rarity: rarity,
  weapon: weapon,
}: CharacterInfo) {
  const visionToColor = (vision: string) => {
    let color;
    switch (vision) {
      case "Electro":
        color = "#8B5FB2";
        break;
      case "Geo":
        color = "#91673C";
        break;
      case "Pyro":
        color = "#DF5B43";
        break;
      case "Cryo":
        color = "#BBFDFE";
        break;
      case "Hydro":
        color = "#70A0CC";
        break;
      case "Anemo":
        color = "#80E6BF";
        break;
      default:
        color = "#AAD277";
    }
    return color;
  };

  return (
    // If the picture is larger than the card, we need to set overflow to hidden.
    <Card
      borderRadius={10}
      overflow="hidden"
      backgroundColor={visionToColor(vision)}
    >
      <CardBody>
        <Box w="270px" h="480px">
          <Image
            src={"/" + name + ".avif"}
            borderRadius="lg"
            maxW="100%"
            maxH="100%"
          />
        </Box>
        <HStack mt="6" spacing="3" justifyContent="center">
          <Image src={"/" + weapon + ".png"} boxSize="50px" />
          <Heading fontSize="2xl" size="md" fontFamily="serif">
            {name}
          </Heading>
        </HStack>
        <RarityDisplay rarity={rarity} />
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <Button borderRadius={10} margin={10} >
          Detail
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CharacterCard;
