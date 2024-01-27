import { existsSync, readFileSync } from "fs";
import path from "path";

(() => {
  const root = path.join(process.cwd());

  const validatorConfigFileLocation = path.join(root, "validator.config.json");

  const exists = existsSync(validatorConfigFileLocation);

  if (!exists) {
    console.log(process.cwd());
    // const defaultValidatorConfigFileLocation = path.join(root, "");

    // const validator = readFileSync(validatorConfigFileLocation);

    // console.log(validator);
  }
})();
