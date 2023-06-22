const { Relayer } = require("defender-relay-client");

// Autotask code used by OpenZeppelin Defender (automation)

exports.handler = async function (credentials) {
  const relayer = new Relayer(credentials);

  const txRes = await relayer.sendTransaction({
    to: "0xb390F2d000d6d5b6fAd0717Fad290B64DE8e613c",
    data: "0xf6100a95",
    speed: "fast",
    gasLimit: "500000",
  });

  console.log(txRes);
  return txRes.hash;
};
