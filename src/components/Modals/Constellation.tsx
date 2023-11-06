import { Image, HStack } from "@chakra-ui/react";

interface Props {
  name: string;
}

function Constellation({ name: name }: Props) {
  const elements = [];
  for (let i = 1; i < 7; i++) {
    elements.push(
      <Image src={`/${name}/constellation${i}.png`} boxSize="30px" />
    );
  }
  return <HStack>{elements}</HStack>;
}

export default Constellation;
