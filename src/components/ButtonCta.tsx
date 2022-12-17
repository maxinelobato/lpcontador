import { Button, Link, Stack } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function ButtonCta() {
  return (
    <Stack direction={['row', 'row', 'column']} align={'center'} position={'relative'}>
      <Button
        leftIcon={<WhatsappLogo size={24} />}
        bgColor="whiteAlpha.900"
        color="blue.900"
        backdropFilter="auto"
        backdropBlur="8px"
        shadow="lg"
        size="lg"
        _hover={{
          transition: 'all .2s ease-in-out',
          transform: 'scale(1.1)',
        }}
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
          isExternal
        >
          Fale com um Especialista
        </Link>
      </Button>
    </Stack>
  );
}
