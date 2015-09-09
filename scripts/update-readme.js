'use strict';

const path = require('path');
const fs = require('fs');
const types = require('../type.js');
const filePath = path.resolve(__dirname, '../README.md');
const readme = fs.readFileSync(filePath, 'utf-8');

const headerIndicator = '---|---';
const footerIndicator = '## License';
const startIndex = readme.indexOf(headerIndicator) + headerIndicator.length;
const endIndex = readme.indexOf(footerIndicator);

const header = readme.slice(0, startIndex);
const footer = readme.slice(endIndex);

let typeString = '';
types.forEach(function (type) {
  typeString += `${type.name}|${type.sample}\n`;
});

fs.writeFileSync(filePath, `${header}
${typeString}


${footer}`, 'utf-8');
