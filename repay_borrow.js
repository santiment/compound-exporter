const { ETHExporter } = require('eth-exporter')
const pkg = require('./package.json')

const exporter = new ETHExporter(pkg.name)

const abi = [
  {
    "indexed": false,
    "name": "payer",
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
    "name": "accountBorrows",
    "type": "uint256"
  },
  {
    "indexed": false,
    "name": "totalBorrows",
    "type": "uint256"
  }
]

exporter.extractEventsWithAbi(topics = ["0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1"], abi)
