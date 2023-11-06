import { HStack, Text, Image } from "@chakra-ui/react";

interface Props {
  text?: string;
}

function IconText({ text: text }: Props) {
  return (
    <HStack>
      <Image src={`/common/${text}.png`} boxSize="30px" />
      <Text>{text}</Text>
    </HStack>
  );
}

export default IconText;
