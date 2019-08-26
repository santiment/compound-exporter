const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "oldReserveFactorMantissa",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "newReserveFactorMantissa",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460"], abi)
