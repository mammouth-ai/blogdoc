const { exec } = require("child_process");

exec(
  "npx infisical scan --baseline-path baseline-report.json git-changes --staged -v", // scan for secrets not already found in baseline-report.json https://infisical.com/docs/cli/scanning-overview#creating-a-baseline
  (error, stdout, _stderr) => {
    if (error) {
      console.error(
        "Error while scanning the changes for sensitive data: REMOVE THE SENSITIVE DATA BEFORE COMMITING.\n"
      );
    }
    console.log(stdout);
    if (error) process.exit(1);
  }
);
