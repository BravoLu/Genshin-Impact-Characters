import { useEffect, useState } from "react";
import {
  SimpleGrid,
  GridItem,
  Grid,
  Heading,
  Center,
  HStack,
  Box,
} from "@chakra-ui/react";
import CharacterCard, {
  CharacterDetail,
  Characters,
} from "./Cards/CharacterCard";
import HttpClient from "../services/http-service";
import Pagination from "./Pagination";
import Selector from "./Selector/Selector";
import NavList from "./Nav/NavList";
import { Elements, Weapons } from "./Selector/config";
import GithubIcon from "./GithubIcon";

function CardGrid() {
  const [characters, setCharacters] = useState<CharacterDetail[]>([]);
  const [page, setPage] = useState(1);

  const [selectedElement, setSelectedElement] = useState("All");
  const [selectedWeapon, setSelectedWeapon] = useState("All");

  const onSelectElement = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedElement(selectedOption);
  };

  const onSelectWeapon = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSelectedWeapon(selectedOption);
  };

  const SelectorFilter = (character: CharacterDetail[]) => {
    let selectedCharacter = character;
    if (selectedWeapon !== "All") {
      selectedCharacter = selectedCharacter.filter(
        (c) => c.weapon && c.weapon === selectedWeapon
      );
    }
    if (selectedElement !== "All") {
      selectedCharacter = selectedCharacter.filter(
        (c) => c.vision && c.vision === selectedElement
      );
    }
    console.log("selectedWeapon", selectedCharacter);
    return selectedCharacter;
  };

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
    <Box>
      <GithubIcon />
      <Grid
        templateAreas={`"header header"
                  "nav select"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={{base: "12% 6% auto"}}
        gridTemplateColumns={"160px 1fr"}   // Use "1fr" for flexible column size
        color="black"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"} bg="Background">
          <Center>
            <Heading color="white" mt={8}>
              Genshin Impact Character Gallery
            </Heading>
          </Center>
        </GridItem>
        <GridItem pl="2" bg="Background" area={"nav"}>
          <NavList
            items={SelectorFilter(characters)
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
            <Selector
              title={"Elements"}
              options={Elements}
              onSelect={onSelectElement}
            />
            <Selector
              title={"Weapons"}
              options={Weapons}
              onSelect={onSelectWeapon}
            />
          </HStack>
        </GridItem>
        <GridItem pl="2" bg="Background" area={"main"}>
          <Center>
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              spacing={5}
            >
              {SelectorFilter(characters)
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
        <GridItem pl="2" pt="5" bg="Background" area={"footer"}>
          <Pagination
            currentPage={page}
            totalPages={SelectorFilter(characters).length / 10 + 1}
            onPageChange={changePage}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default CardGrid;
