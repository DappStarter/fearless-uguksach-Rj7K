require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind provide install fortune success shop'; 
let testAccounts = [
"0x4fc4c7320333e52e5836c244f64ec36c3e08e31199be8059147c581e5a8015b4",
"0xd91a6eacd98dcd04ea33cbfe605ba972be6946338e4c18542b78cacd43de824e",
"0x30893246d1f793993321c6978b1d8cd508b6789c50975dc40a820a3d80f67918",
"0x841071f9bee515cf5d7e62295ce6bfd5eca96d5154a60939851dc534eac436a0",
"0x2833a8023bafa8b4581af21b6bcdac76841733033fd4e4b4dae07957d21a17d3",
"0x836e4877e4dee36df2aaad67556e9e4f41206a138af3025e1f1d7517eda200d2",
"0x6705cddb229c1a2103b60c3cebe622d2fd0dfa39cfcd4f15e3bdf462f1d17940",
"0xc0eec0a47660ce80e28d4ac4a691909d62b22c6d16de2919396a572dbf065718",
"0xe86b3f009762db07426c5b6e2b32868c86a5001d0cad35f5138321e482ba6b80",
"0x3ceab02df61aa683dd7d61ab3a703e21068632ddda2c779ea76be21f1448dcaa"
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


