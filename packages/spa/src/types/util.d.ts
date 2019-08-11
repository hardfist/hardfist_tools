declare namespace spa.util {
  export type withClassName<P = {}> = P & {
    className?: string;
  };
}
