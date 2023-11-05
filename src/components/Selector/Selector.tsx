import { Heading, Select, HStack } from "@chakra-ui/react";

interface Props {
  title: string;
  options: string[];
}

function Selector({ title, options }: Props) {
  return (
    <>
      <HStack>
        <Heading>{title}</Heading>
        <Select>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </Select>
      </HStack>
    </>
  );
}

export default Selector;
