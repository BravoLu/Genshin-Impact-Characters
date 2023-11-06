import {
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react";

function GifAnimation({ name }: { name?: string }) {
  return (
    <>
      <Tabs m="10px">
        <TabList>
          <Tab>
            <HStack>
              <Image src={`/${name}/Skill.png`} boxSize="30px" />
              <Text>Elemental Skill</Text>
            </HStack>
          </Tab>
          <Tab>
            <HStack>
              <Image src={`/${name}/Burst.png`} boxSize="30px" />
              <Text>Elemental Burst</Text>
            </HStack>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Center>
              <Image src={`/${name}/Skill.gif`} />
            </Center>
          </TabPanel>
          <TabPanel>
            <Center>
              <Image src={`/${name}/Burst.gif`} />
            </Center>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default GifAnimation;
