'use strict';

const { Config } = require('@metarhia/config');

(async () => {
  const config = await new Config('./config');
  console.dir(config, { depth: null });
})();
