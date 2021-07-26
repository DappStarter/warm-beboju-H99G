require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food chaos raise sad exchange coral light army gasp'; 
let testAccounts = [
"0x02df37e11208ab0d118b0c67313395d591c78dadb4827a89ff1acb8347b470a7",
"0x35cc1a451196b85d557381814b73b74715c90a2904bbb5b771a4fd27db0bad8b",
"0x4d55a04132c83d6398df1f0896006f5d446043149dde5f6a1a15eb7f559edc8e",
"0x727edc24d077292c14883454d68bac65a55608ec2e59bb2d44e612b0e45c82dd",
"0x1ea22efb5e65600ec3c82c4d1df511cdc9e281eae73fabc00206029f1b6c6ee8",
"0x63007a8c5ba994d2b6cd3270ce70e0e9c3e11871c518ee6e1a4bdeec5307ff22",
"0xbd64f768e39cb193e64693fc3b650aa1b30e554e02bc31bdf1113ed9932b02a4",
"0x6bcfa78ab2ff80b9908b484c6a47873ff3676cf2ffb10e175ccf5e11272fdba0",
"0x249a92c149a3ea09ef7613799539d7685fec838b9a32785683bd147414aa02b2",
"0xf925049224a03407f09fbe2cb2b3b412aff49331230685d768606b5dcdd4a9ae"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


