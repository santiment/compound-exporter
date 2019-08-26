const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "liquidator",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "borrower",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "repayAmount",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "cTokenCollateral",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "seizeTokens",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52"], abi)
