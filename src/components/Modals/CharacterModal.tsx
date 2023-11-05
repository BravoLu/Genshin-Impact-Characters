import { useEffect, useState } from "react";
import HttpClient from "../../services/http-service";
import { useDisclosure } from "@chakra-ui/react";
import { CharacterDetail } from "../Cards/CharacterCard";
import GifAnimation from "./GifAnimation";
import AvatarIcon from "../Nav/AvatarIcon";
import { Image, HStack, Box, Badge, Stack } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  Text,
  ListIcon,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import BasicInfo from "./BasicInfo";

interface Props {
  id: number;
  isButton?: boolean;
}

interface CharacterProps {
  result: CharacterDetail;
}

function CharacterModal({ id: id, isButton: isButton }: Props) {
  // get detail.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [character, setCharacters] = useState<CharacterDetail | null>(null);

  useEffect(() => {
    HttpClient("https://gsi.fly.dev")
      .get<CharacterProps>("/characters/" + String(id))
      .then((res) => setCharacters(res.result));
    // .then((res) => console.log("abc", String(id), res))
  }, [character]);

  return (
    <>
      {/* { character === null && null}; */}
      {isButton && (
        <Button
          borderRightRadius={3}
          margin={3}
          onClick={onOpen}
          w="100px"
          h="30px"
          backgroundImage={`/${character?.name}/Bar.png`}
          backgroundSize="cover"
        >
          View
        </Button>
      )}
      {!isButton && (
        <HStack onClick={onOpen}>
          <ListIcon as={AvatarIcon} name={character?.name} />
          <Text color={character?.vision}>{character?.name}</Text>
        </HStack>
      )}
      {/* set the size */}
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent
          bg={character?.vision}
          backgroundImage={`/${character?.name}/Banner.png`}
          backgroundSize="cover"
        >
          <HStack justifyContent="center">
            <ModalCloseButton ml="auto" />
          </HStack>
          <ModalBody>
            <Image
              justifyContent="center"
              src={`/${character?.name}/SplashArt.png`}
              w="1000px"
              h="800px"
            />
            <BasicInfo
              name={character?.name}
              rarity={character?.rarity}
              title={character?.title}
              weapon={character?.weapon}
              vision={character?.vision}
              model_type={character?.model_type}
              birthday={character?.birthday}
              constellation={character?.constellation}
              region={
                character?.region && character?.region?.length !== 0
                  ? character?.region[0]
                  : ""
              }
              affiliation={character?.affiliation}
              special_dish={character?.special_dish}
              release_day={character?.release_day}
              release_version={character?.release_version}
            />
            <GifAnimation name={character?.name} />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CharacterModal;
