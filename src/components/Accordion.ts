import { accordionAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  parts.keys
);

// default base style from the Input theme
const baseStyle = definePartsStyle({
  container: defineStyle({
    boxShadow: 'lg',
    _focus: {
      boxShadow: 'lg',
      rounded: 'lg',
    },
  }),
});

// Defining a custom variant called outline
const outline = definePartsStyle(() => {
  return {
    container: {
      backdropFilter: 'auto',
      backdropBlur: '1rem',
      bgColor: 'whiteAlpha.50',
      shadow: 'lg',
      rounded: 'lg',
    },
    button: {
      color: 'whiteAlpha.900',
      _hover: {
        bgColor: '#BF778A',
        rounded: 'lg',
      },
      _focus: {
        bgColor: '#BF778A',
        rounded: 'lg',
      },
    },
  };
});

const variants = {
  outline,
};

const size = {
  md: defineStyle({
    w: 5,
    h: 5,
  }),
};

const sizes = {
  md: definePartsStyle({
    icon: size.md,
  }),
};

export const accordionTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
