async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "MEMEME",
      attributes: [
        {
          trait_type: "MEME",
          value: "1000",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/Qmeb8HFr69FWmKcf9K9Su9rqGPQ2czyniXGHBCS9sxtPCP",
      description: "So much PLW3!",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
