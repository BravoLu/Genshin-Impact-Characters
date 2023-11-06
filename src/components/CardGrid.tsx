import { useEffect, useState } from "react";
import {
  SimpleGrid,
  GridItem,
  Grid,
  Heading,
  Center,
  HStack,
} from "@chakra-ui/react";
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
      .get<Characters>("/characters?limit=51")
      .then((res) =>
        setCharacters(
          res.results.filter(
            (item) => item.id !== 20 && item.id !== 21 && item.id !== 50
          )
        )
      );
  }, []);

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
        gridTemplateRows={"100px 50px 1250px"}
        gridTemplateColumns={"120px 1400px"}
        // h="auto"
        // w="auto"
        color="#303030"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"} bg="Background">
          <Center>
            <Heading mt={8}>Genshin Impact Character Gallery</Heading>
          </Center>
        </GridItem>
        <GridItem pl="2" bg="Background" area={"nav"}>
          <NavList
            items={characters
              .slice(
                (page - 1) * 10,
                page * 10 > characters.length ? characters.length : page * 10
              )
              .map((c) => ({
                name: c.name,
                vision: c.vision,
                id: c.id,
              }))}
          />
        </GridItem>
        <GridItem pl="2" bg="Background" area={"select"}>
          <HStack>
            <Selector title={"Vision"} options={["Pyro", "Hydro"]} />
            <Selector title={"Region"} options={["Liyue", "M"]} />
            <Selector title={"Weapon"} options={["Bow", "Sword"]} />
          </HStack>
        </GridItem>
        <GridItem pl="2" bg="Background" area={"main"}>
          <Center>
            <SimpleGrid columns={5} spacing={5}>
              {characters
                .slice(
                  (page - 1) * 10,
                  page * 10 > characters.length ? characters.length : page * 10
                )
                .map((character) => (
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
          </Center>
        </GridItem>
        <GridItem pl="2" bg="Background" area={"footer"}>
          <Pagination
            currentPage={page}
            totalPages={5}
            onPageChange={changePage}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default CardGrid;
