export type ProgressLog = {
  stop: () => void;
  add: () => void;
};

export function createProgressLog(data: { name: string; total: number }) {
  let current = 0;
  console.time(data.name);
  const interval = setInterval(() => {
    console.log(`[${data.name}] ${current}/${data.total}`);
  }, 1_000);
  return {
    stop: () => {
      console.timeEnd(data.name);
      clearInterval(interval);
    },
    add: () => current++,
  };
}
