const { env } = require("process");
const scanner = require("sonarqube-scanner");

scanner(
  {
    // this example uses local instance of SQ
    serverUrl: env.SONARQUBE_SERVER,
    options: {
      "sonar.sources": "src",
      "sonar.projectKey": "kubechief-angular-spa",
      "sonar.login": env.SONARQUBE_TOKEN,
    },
  },
  () => {
    // callback is required
  }
);
