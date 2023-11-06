import {
  Card,
  Image,
  CardBody,
  Heading,
  Divider,
  Center,
  Box,
  HStack,
} from "@chakra-ui/react";
import RarityDisplay from "../RarityDisplay";
import CharacterModal from "../Modals/CharacterModal";

export interface Characters {
  results: CharacterDetail[];
  pages?: number;
  totalPage?: number;
  totalResult?: number;
}

export interface CharacterDetail {
  id: number;
  name: string;
  rarity: string;
  weapon: string;
  vision: string;
  title?: string[];
  real_name?: string;
  model_type?: string;
  constellation?: string;
  modelType?: string;
  birthday?: string;
  region?: string[];
  release_day?: string;
  release_version?: string;
  affiliation?: string[];
  special_dish?: string;
}

export interface Props {
  id: number;
  name: string;
  rarity: string;
  vision: string;
}

function CharacterCard({
  id: id,
  name: name,
  vision: vision,
  rarity: rarity,
}: Props) {
  return (
    // If the picture is larger than the card, we need to set overflow to hidden.
    <Card borderRadius={10} overflow="hidden" backgroundColor={vision}>
      <CardBody p={0}>
        <Box w="auto" h="auto">
          <Image src={`/${name}/Poster.png`} borderTopRadius="lg" />
        </Box>
        <Box backgroundImage={`/${name}/Banner.png`} bgSize="cover">
        <Divider />
          <HStack justifyContent="center">
            <Image src={`/common/${vision}.png`} boxSize="50px" />
            <Heading fontSize="2xl" size="md">
              {name}
            </Heading>
          </HStack>
          <Center>
            <RarityDisplay rarity={rarity} />
          </Center>
          <Center>
            <CharacterModal id={id} isButton={true} />
          </Center>
        </Box>
      </CardBody>
    </Card>
  );
}

export default CharacterCard;
