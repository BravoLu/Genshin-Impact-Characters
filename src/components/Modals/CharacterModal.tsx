import { useEffect, useState } from "react";
import HttpClient from "../../services/http-service";
import { useDisclosure } from "@chakra-ui/react";
import { CharacterDetail } from "../Cards/CharacterCard";
import GifAnimation from "./GifAnimation";
import { Image, HStack, Box, Badge, Stack } from "@chakra-ui/react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import BasicInfo from "./BasicInfo";

interface Props {
  id: number;
}

interface CharacterProps {
  result: CharacterDetail;
}

function CharacterModal({ id }: Props) {
  // get detail.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [character, setCharacters] = useState<CharacterDetail | null>(null);

  useEffect(() => {
    HttpClient("https://gsi.fly.dev")
      .get<CharacterProps>("/characters/" + String(id))
      .then((res) => setCharacters(res.result));
  }, [character]);

  return (
    <>
      {/* { character === null && null}; */}
      <Button borderRadius={10} margin={10} onClick={onOpen}>
        Detail
      </Button>
      {/* set the size */}
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent bg={character?.vision}>
          <HStack justifyContent="center">
            <Box>
              <ModalHeader fontSize={50}>{character?.name}</ModalHeader>
            </Box>
            <ModalCloseButton ml="auto" />
          </HStack>
          <ModalBody>
            <Image
              justifyContent="center"
              src={"/" + character?.name + "Portrait.png"}
              w="1000px"
              h="800px"
            />
            <BasicInfo
              real_name={character?.real_name}
              rarity={character?.rarity}
              title={character?.title}
              weapon={character?.weapon}
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
