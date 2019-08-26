const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "borrower",
    "type": "address"
  },
  {
    "indexed": false,
    "name": "borrowAmount",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "accountBorrows",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "totalBorrows",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80"], abi)
