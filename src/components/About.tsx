import { Box, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ButtonCta } from './ButtonCta';

export function About() {
  return (
    <Box bgGradient="linear(to-r, #330519 10%, #330519 20%, #BF778A)">
      <Container maxW={'7xl'}>
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="whiteAlpha.900" as={'span'}>
                  Conheça a
                </Text>{' '}
                <Text color="#BF778A" as="span" textShadow="#000 1px 1px" m={6}>
                  Especialista
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.700'}>
                O escritório MS ADVOCACIA E ASSESSORIA JURÍDICA atua em toda a Região do
                Maranhão. Somos especialistas em Direito Penal se traduz no servir
                através de uma Advocacia Criminal Humanizada, discreta e ágil na defesa
                dos interesses de seus clientes.
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                <ButtonCta />
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} justifyContent="center" align="center" p={[2, 16, 10]}>
            <Image
              rounded="lg"
              shadow="lg"
              alt="Perfil"
              objectFit="cover"
              boxSize="lg"
              src={'/img/may.webp'}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
