const {Client} = require('node-ssdp');
const Sleep = require('sleep');
const client = new Client();

const ALL = 'ssdp:all';

client.on("response", (headers, status, rinfo) => {
    console.log("response", JSON.stringify({
        "headers" : headers,
        "status" : status,
        "rinfo" : rinfo
    }));
    console.log("\n");
});

for(let i = 0; i < 3000; i++) {
    client.search(ALL);
    Sleep.msleep(10);
}
