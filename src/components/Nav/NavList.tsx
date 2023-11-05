import { useState } from "react";
import { List, ListItem, ListIcon, HStack, Text } from "@chakra-ui/react";
import CharacterModal from "../Modals/CharacterModal";

interface NavItem {
  name: string;
  vision: string;
  id: number;
}

interface Props {
  items: NavItem[];
}

function NavList({ items: items }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <List spacing={3}>
      {items.map((item) => {
        return (
          <ListItem
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            _hover={{
              background: "lightgray", // Change the background color on hover
              cursor: "pointer", // Change the cursor to indicate it's clickable
            }}
          >
            <HStack>
              <CharacterModal id={item.id} isButton={false} />
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}

export default NavList;
