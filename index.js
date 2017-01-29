const backgroundColor = 'rgba(22, 22, 27, 0.8)';
const foregroundColor = 'rgba(115,115,115, 0.6)';
const WHITE = '#ffffff';
const LIGHT_GRAY = 'rgba(242,242,242, 0.7)';
const DARK_GRAY = 'rgba(104,104,104, 0.6)';
const cursorColor = LIGHT_GRAY;
const borderColor = backgroundColor;

const colors = {
  black: DARK_GRAY,
  red: WHITE,
  green: WHITE,
  yellow: WHITE,
  blue: WHITE,
  magenta: WHITE,
  cyan: WHITE,
  white: WHITE,
  lightBlack: DARK_GRAY,
  lightRed: LIGHT_GRAY,
  lightGreen: LIGHT_GRAY,
  lightYellow: LIGHT_GRAY,
  lightBlue: LIGHT_GRAY,
  lightMagenta: LIGHT_GRAY,
  lightCyan: LIGHT_GRAY,
  colorCubes: WHITE,
  grayscale: foregroundColor
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
              backgroundColor: ${WHITE} !important;
              border-color: ${WHITE} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid ${WHITE};
      }
    `
  });
};

