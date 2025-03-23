'use strict';

const { Config } = require('@metarhia/config');

const main = async () => {
  const config = await new Config('./config');
  console.dir(config, { depth: null });
};

main();
