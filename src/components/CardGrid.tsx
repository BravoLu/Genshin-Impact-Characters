import { useEffect, useState } from "react";
import { SimpleGrid, GridItem, Grid, Heading, Center, HStack } from "@chakra-ui/react";
import CharacterCard, {
  CharacterDetail,
  Characters,
} from "./Cards/CharacterCard";
import HttpClient from "../services/http-service";
import Pagination from "./Pagination";
import Selector from "./Selector/Selector";
import NavList from "./Nav/NavList";

function CardGrid() {
  const [characters, setCharacters] = useState<CharacterDetail[]>([]);
  const [page, setPage] = useState(1);

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
      <Grid
        templateAreas={`"header header"
                  "nav select"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 1350px"}
        gridTemplateColumns={"150px 1fr"}
        h="auto"
        w="auto"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <Center>
            <Heading>Genshin Impact</Heading>
          </Center>
        </GridItem>
        <GridItem pl="2" bg="blackAlpha.700" area={"nav"}>
            <NavList items={characters.map(c => ({name: c.name, vision: c.vision}))} />
        </GridItem>
        <GridItem pl="2" bg="blackAlpha.700" area={"select"}>
          <HStack>
            <Selector />
            <Selector />
            <Selector />
          </HStack>
        </GridItem>
        <GridItem pl="2" bg="blackAlpha.700" area={"main"}>
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
        </GridItem>
        <GridItem pl="2" bg="blackAlpha.700" area={"footer"}>
          <Pagination
            currentPage={page}
            totalPages={6}
            onPageChange={changePage}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default CardGrid;
