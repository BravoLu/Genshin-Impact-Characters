import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import CharacterCard, {
  CharacterDetail,
  Characters,
} from "./Cards/CharacterCard";
import HttpClient from "../services/http-service";
import Pagination from "./Pagination";

function CardGrid() {
  const [selectedId, setSelectId] = useState(1);
  const [characters, setCharacters] = useState<CharacterDetail[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);

  const clickDetailButton = () => {
    setSelectId(2);
    onOpen();
  }

  useEffect(() => {
    HttpClient("https://gsi.fly.dev")
      .get<Characters>("/characters?page=" + String(page))
      .then((res) => setCharacters(res.results));
  }, [page]);

  const changePage = (curPage: number) => {
    setPage(curPage);
  };

  return (
    // TODO: set the adaptive columns.
    // <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={10} padding='10px'>
    <>
      <SimpleGrid columns={5} spacing={10} padding="10px">
        {characters.map((character) => (
          <li key={character.id}>
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
      <Pagination currentPage={page} totalPages={6} onPageChange={changePage} />
    </>
  );
}

export default CardGrid;
