function createIncrement(incBy: number): {
  increment: () => number;
  getLogMessage: () => string;
} {
  let value = 0;

  function increment(): number {
    value += incBy;
    return value;
  }

  const message = `Current value is ${value}`;
  function getLogMessage(): string {
    return message;
  }

  return {increment, getLogMessage};
}

export {createIncrement};
