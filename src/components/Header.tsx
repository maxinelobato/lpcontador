import { Container, Box, Heading, Stack, Flex } from '@chakra-ui/react';
import { BgImage } from './BgImage';
import { ButtonCta } from './ButtonCta';
import { Description } from './Description';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <BgImage>
      <Box bgGradient="linear(to-bl, rgba(0, 0, 0, 0.5), rgba(26, 54, 93, 2) 80%)">
        <Container maxW={'5xl'}>
          <Navbar />
          <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex align="center" justify="left">
              <Stack spacing={4} w={'full'} maxW={'lg'} mt={5}>
                <Heading
                  as="h1"
                  fontWeight="bold"
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                  lineHeight="110%"
                  color="whiteAlpha.800"
                >
                  Está com despesas altas na sua empresa e não sabe o que fazer? {''}
                </Heading>
                <Heading
                  py="2"
                  as="h2"
                  textShadow="#000 1px 1px"
                  color="blue.200"
                  fontWeight="bold"
                  fontSize={{ base: '2xl', sm: '3xl', md: '3xl' }}
                >
                  Somos especialistas em{' '}
                  <i>
                    Análise de Cálculo, ICMS, ISSQN, Pis, Cofins, IR, CSLL, Pasep e
                    muito mais
                  </i>{' '}
                  que o seu Negócio necessita.
                </Heading>
                <Heading
                  py="2"
                  as="h2"
                  color={'whiteAlpha.700'}
                  fontWeight="normal"
                  fontSize={['sm', 'md', 'lg']}
                >
                  Fale com um de nossos Especialistas agora mesmo no{' '}
                  <strong>WhatsApp</strong> e faça uma consulta.
                </Heading>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <ButtonCta />
                </Stack>
              </Stack>
            </Flex>
          </Stack>
          <Stack
            as={Box}
            textAlign="center"
            spacing={[4, 4, 8]}
            py={[0, 0, 28]}
            mt={-2}
          >
            <Description />
          </Stack>
        </Container>
      </Box>
    </BgImage>
  );
}
