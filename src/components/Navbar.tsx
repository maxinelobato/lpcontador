import { Box, Flex, HStack, Link, Button, Image, Text } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function Navbar() {
  return (
    <>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems="center">
          <Box bgColor="whiteAlpha.900" rounded="lg" p={4} py={[-24, -24, -24, 5]}>
            <Image alt="" height={[20]} width={[20]} src="/vercel.svg" />
            <Text mt="-5" textAlign="center" color="blackAlpha.800">
              Sua Logo
            </Text>
          </Box>
        </HStack>
        <Flex alignItems={'center'}>
          <Button leftIcon={<WhatsappLogo size={22} />} ml={4}>
            <Link
              style={{ textDecoration: 'none' }}
              href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Exemplo!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
              isExternal
            >
              (xx) xxxxx-xxxx
            </Link>
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
