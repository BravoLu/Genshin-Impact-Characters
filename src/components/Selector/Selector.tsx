import { Heading, Select, HStack } from "@chakra-ui/react";

interface Props {
  title: string;
  options: string[];
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Selector({ title: title, options: options, onSelect: onSelect }: Props) {
  return (
    <>
      <HStack>
        <Heading fontSize="20px" color="white">{title}</Heading>
        <Select bgColor="white" onChange={onSelect}>
          {options.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
        </Select>
      </HStack>
    </>
  );
}

export default Selector;
