const { ingestAndIndex } = require("./indexer");

function main() {
  const summary = ingestAndIndex();
  process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
}

main();
