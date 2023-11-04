import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CharacterCard, {
  CharacterInfo,
  Characters,
} from "./Cards/CharacterCard";
import HttpClient from "../services/http-service";

function CardGrid() {
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);
  useEffect(() => {
    HttpClient("https://gsi.fly.dev")
      .get<Characters>("/characters")
      .then(
        (res) => setCharacters(res.results)
      );
  }, []);

  return (
    // TODO: set the adaptive columns.
    // <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10} padding='10px'>
    <SimpleGrid columns={5} spacing={10} padding="10px">
      {characters.map((character) => (
        <li>
          <CharacterCard
            id={character.id}
            name={character.name}
            vision={character.vision}
            rarity={character.rarity}
            weapon={character.weapon}
          />
        </li>
      ))}
    </SimpleGrid>
  );
}

export default CardGrid;
