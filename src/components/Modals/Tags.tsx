import { Stack, Badge } from "@chakra-ui/react";

function Tags({ title, variant }: { title?: string[], variant?: string }) {
  return (
    <Stack direction="row">
      {title?.map((t) => (
        <Badge variant={variant} colorScheme="green">
          {t}
        </Badge>
      ))}
    </Stack>
  );
}

export default Tags;
