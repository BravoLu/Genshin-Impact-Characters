import { Stack, Badge } from "@chakra-ui/react";

function Titles({ title }: { title?: string[] }) {
  return (
    <Stack direction="row">
      {title?.map((t) => (
        <Badge variant="solid" colorScheme="green">
          {t}
        </Badge>
      ))}
    </Stack>
  );
}

export default Titles;
