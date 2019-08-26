const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "admin",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "reduceAmount",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "newTotalReserves",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e"], abi)
