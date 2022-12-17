import {
  Container,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Link,
  Stack,
} from '@chakra-ui/react';
import {
  AiFillPhone,
  AiOutlineMail,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

export function Contact() {
  return (
    <Box bgGradient="linear(to-tl, rgba(0, 0, 0, 0.5), rgba(51, 5, 25) 80%)">
      <Container maxW="7xl" justifyContent="center">
        <Box p={10}>
          <Heading textAlign="center">Meus Contatos</Heading>
          <Text mt={[3, 3, 5]} textAlign="center" color="whiteAlpha.700">
            Fale comigo por E-mail, Telefone ou Whatsapp.
          </Text>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems="center"
              direction={['column', 'column', 'row']}
            >
              <Button
                as={Link}
                shadow="lg"
                size="md"
                height="48px"
                width="200px"
                variant="solid"
                color="#DCE2FF"
                _hover={{ bgColor: 'rgba(187, 115, 134, 0.5)', transition: '0.5s' }}
                leftIcon={<AiFillPhone color="#fff" size="20px" />}
                href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
                style={{ textDecoration: 'none' }}
                isExternal
              >
                (98) 98125-8283
              </Button>
              <Button
                as={Link}
                shadow="lg"
                size="md"
                height="48px"
                width="280px"
                variant="solid"
                color="#DCE2FF"
                _hover={{ bgColor: 'rgba(187, 115, 134, 0.5)', transition: '0.5s' }}
                leftIcon={<AiOutlineMail color="#fff" size="20px" />}
                href="mailto:mayanasilva.adv@gmail.com"
                style={{ textDecoration: 'none' }}
                isExternal
              >
                mayanasilva.adv@gmail.com
              </Button>
            </Stack>
          </Box>
          <Box>
            <Text textAlign="center" color="whiteAlpha.700">
              Fale comigo por E-mail, Telefone ou Whatsapp.
            </Text>
            <Box p={[5, 5, 8]} mb={-5}>
              <Stack
                spacing={3}
                justifyContent="center"
                alignItems="center"
                direction="row"
              >
                <IconButton
                  as={Link}
                  shadow="lg"
                  aria-label="facebook"
                  variant="solid"
                  size="lg"
                  w={12}
                  h={12}
                  _hover={{ bgColor: 'rgba(187, 115, 134, 0.5)', transition: '0.5s' }}
                  icon={<AiFillInstagram size={24} />}
                  href="https://www.instagram.com/mayanasilva_adv/"
                  style={{ textDecoration: 'none' }}
                  isExternal
                />
                <IconButton
                  as={Link}
                  shadow="lg"
                  aria-label="linkedin"
                  size="lg"
                  w={12}
                  h={12}
                  _hover={{ bgColor: 'rgba(187, 115, 134, 0.5)', transition: '0.5s' }}
                  icon={<AiFillLinkedin size={24} />}
                  href="https://www.linkedin.com/in/mayana-silva-628460216"
                  style={{ textDecoration: 'none' }}
                  isExternal
                />
              </Stack>
            </Box>
          </Box>
          <Box>
            <Text textAlign="center" fontWeight="bold" color="whiteAlpha.700" mt={5}>
              Advogada Dra. Mayana Silva | OAB/MA - 24.593
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
