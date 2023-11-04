import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Heading,
  Divider,
  Center,
  Box,
  HStack,
} from "@chakra-ui/react";
import RarityDisplay from "../RarityDisplay";
import CharacterModal from "../Modals/CharacterModal"

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
  modelType?: string;
  birthday?: string; 
}

export interface Props {
  id: number;
  name: string;
  rarity: string;
  weapon: string;
  vision: string;
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}

function CharacterCard({
  id: id,
  name: name,
  vision: vision,
  rarity: rarity,
  weapon: weapon,
  onOpen: onOpen,
  isOpen: isOpen,
  onClose: onClose,
}: Props) {
  return (
    // If the picture is larger than the card, we need to set overflow to hidden.
    <Card
      borderRadius={10}
      overflow="hidden"
      backgroundColor={vision}
    >
      <CardBody p={0}>
        <Box w="270px" h="480px">
          <Image
            src={"/" + name + ".avif"}
            borderRadius="lg"
          />
        </Box>
        <HStack mt="6" spacing="3" justifyContent="center">
          <Image src={"/" + weapon + ".png"} boxSize="50px" />
          <Heading fontSize="2xl" size="md">
            {name}
          </Heading>
        </HStack>
        <Center>
        <RarityDisplay  rarity={rarity} />
        </Center>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="center">
        <CharacterModal id={id} onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
      </CardFooter>
    </Card>
  );
}

export default CharacterCard;
