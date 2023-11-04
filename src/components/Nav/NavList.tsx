import { List, ListItem, ListIcon, HStack, Text } from "@chakra-ui/react";
import AvatarIcon from "./AvatarIcon.tsx";

interface NavItem {
  name: string;
  vision: string;
}

interface Props {
  items: NavItem[];
}

function NavList({ items: items }: Props) {
  return (
    <List spacing={3}>
      {items.map((item) => {
        return (
          <ListItem>
            <HStack>
              <ListIcon as={AvatarIcon} name={item.name} />
              <Text color={item.vision}>{item.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}

export default NavList;
