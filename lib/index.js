import makeWASocket from './Socket/index.js';
import chalk from "chalk";

console.log(chalk.hex("#6f00f")(`
X Z V — E X P Z C
`));

console.log(chalk.hex("#6f00f")("powered by : t.me/JustRxVz\n"));
console.log(chalk.hex("#6f00f")("Follow t.me/JustRxVz For More Updates"));

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';

export { makeWASocket };
export default makeWASocket;

//# sourceMappingURL=index.js.map
