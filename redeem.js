const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "redeemer",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "redeemAmount",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "redeemTokens",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929"], abi)
