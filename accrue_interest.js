const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [{
  "indexed": false,
  "name": "interestAccumulated",
  "type": "uint256"
},
{
  "indexed": false,
  "name": "borrowIndex",
  "type": "uint256"
},
{
  "indexed": false,
  "name": "totalBorrows",
  "type": "uint256"
}]

exporter.extractEventsWithAbi(topics = ["0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9"], abi)
