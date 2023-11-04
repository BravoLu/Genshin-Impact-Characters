import { Heading, Select, Stack } from "@chakra-ui/react";

function Selector() {
  return (
    <>
      <Stack>
        <Heading>Vision</Heading>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Stack>
    </>
  );
}

export default Selector;
