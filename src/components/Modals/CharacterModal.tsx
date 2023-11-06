import { useEffect, useState } from "react";
import HttpClient from "../../services/http-service";
import { useDisclosure } from "@chakra-ui/react";
import { CharacterDetail } from "../Cards/CharacterCard";
import GifAnimation from "./GifAnimation";
import AvatarIcon from "../Nav/AvatarIcon";
import { Image, HStack } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalContent,
  Text,
  ListIcon,
  ModalBody,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [character, setCharacters] = useState<CharacterDetail | null>(null);

  useEffect(() => {
    HttpClient("https://gsi.fly.dev")
      .get<CharacterProps>("/characters/" + String(id))
      .then((res) => setCharacters(res.result));
  }, [character]);

  return (
    <>
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
      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalContent
          bg={character?.vision}
          backgroundImage={`/${character?.name}/Banner.png`}
          backgroundSize="cover"
        >
          <ModalBody>
            <Image
              justifyContent="center"
              src={`/${character?.name}/SplashArt.png`}
              w="auto"
              h="auto"
            />
            <BasicInfo
              name={character?.name}
              rarity={character?.rarity}
              title={character?.title}
              weapon={character?.weapon}
              vision={character?.vision}
              model_type={character?.model_type}
              birthday={character?.birthday}
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
        </ModalContent>
      </Modal>
    </>
  );
}

export default CharacterModal;
