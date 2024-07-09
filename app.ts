import crypto from "crypto";
import fs from "fs";
import { ethers } from "ethers";

function app() {
  const count = parseInt(process.argv[2]);

  let result: string = "";

  for (let idx = 1; idx <= count; idx++) {
    const pk: string = crypto.randomBytes(32).toString("hex");
    const addr: string = new ethers.Wallet(pk).address;
    result += `${addr} | ${pk}`;
    if (idx !== count) result += "\n";
  }

  console.log(result);

  if (!fs.existsSync("out")) fs.mkdirSync("out");
  fs.writeFileSync("out/result.txt", result, { encoding: "utf-8" });

  console.log("Done!");
}

app();
