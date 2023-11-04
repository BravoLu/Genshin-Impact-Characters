import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
  TableContainer,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";
import Tags from "./Tags";
import { CharacterDetail } from "../Cards/CharacterCard";
import RarityDisplay from "../RarityDisplay";

function BasicInfo({
  name,
  rarity,
  title,
  weapon,
  vision,
  model_type,
  birthday,
  constellation,
  region,
  affiliation,
  special_dish,
  release_day,
  release_version,
}: {
  name?: string;
  rarity?: string;
  title?: string[];
  weapon?: string;
  vision?: string;
  model_type?: string;
  birthday?: string;
  constellation?: string;
  region?: string;
  affiliation?: string[];
  special_dish?: string;
  release_day?: string;
  release_version?: string;
}) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Information</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Name</Td>
            <Td>{name}</Td>
          </Tr>
          <Tr>
            <Td>Rarity</Td>
            <Td>
              <RarityDisplay rarity={rarity} />
            </Td>
          </Tr>
          <Tr>
            <Td>Title</Td>
            <Td>
              <Tags title={title} variant="solid"/>
            </Td>
          </Tr>
          <Tr>
            <Td>Weapon</Td>
            <Td>
              <HStack>
                <Image src={"/" + weapon + ".png"} boxSize="30px" />
                <Text>{weapon}</Text>
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>Vision</Td>
            <Td>
              <HStack>
                <Text>{vision}</Text>
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>Model Type</Td>
            <Td>
              <Text>{model_type}</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>Birthday</Td>
            <Td>
              <Text>{birthday}</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>Constellation</Td>
            <Td>
              <Text>{constellation}</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>Region</Td>
            <Td>
              <Text>{region}</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>Affiliation</Td>
            <Td>
              <Tags title={affiliation} variant="subtle"/>
            </Td>
          </Tr>
          <Tr>
            <Td>Special Dish</Td>
            <Td>
              <Text>{special_dish}</Text>
            </Td>
          </Tr>
          <Tr>
            <Td>Release Day</Td>
            <Td>
              <Text>
                {release_day?.slice(0, 10)} <Tag marginLeft="5px">{release_version}</Tag>{" "}
              </Text>
            </Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}

export default BasicInfo;
