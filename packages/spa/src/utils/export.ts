export const wrapDefault = <M>(fn: () => Promise<M>, prop: keyof M) => {
  return async () => {
    const result = await fn();
    return {
      default: result[prop]
    };
  };
};
