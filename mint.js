const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "minter",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "mintAmount",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "mintTokens",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f"], abi)
