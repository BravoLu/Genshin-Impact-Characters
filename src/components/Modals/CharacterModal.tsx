import { useEffect, useState } from "react";
import HttpClient from "../../services/http-service";
import { CharacterDetail, Characters } from "../Cards/CharacterCard";
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

interface Props {
  id: number;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface CharacterProps {
  result: CharacterDetail;
}

function CharacterModal({ id, isOpen, onOpen, onClose }: Props) {
  // get detail.
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
        <ModalContent bg="Pyro">
          <HStack justifyContent="center">
            <Box>
              <ModalHeader fontSize={50}>{character?.name}</ModalHeader>
            </Box>
            <ModalCloseButton ml="auto" />
          </HStack>
          <ModalBody>
            <Image
              justifyContent="center"
              src={"/AmberPortrait.png"}
              w="1000px"
              h="800px"
            />
            <Stack direction="row">
              <Badge>Default</Badge>
              <Badge variant="solid" colorScheme="green">
                Success
              </Badge>
              <Badge variant="solid" colorScheme="red">
                Removed
              </Badge>
              <Badge variant="solid" colorScheme="purple">
                New
              </Badge>
            </Stack>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CharacterModal;
