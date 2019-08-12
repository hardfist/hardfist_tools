import 'styled-components';
import light from 'theme/light.json';
type Theme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends Record<keyof Theme, string> {}
}
