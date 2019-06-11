export function getAppConfig() {
    // your account sid
    var accountSid = "AC003f2e2a422b9ba423d225cf97b1e37c";

    // your runtime domain
    var serviceBaseUrl = "scarlet-jackal-7912.tw.io";

  // set to /plugins.json for local dev
  // set to /plugins.local.build.json for testing your build
  // set to "" for the default live plugin loader
  var pluginServiceUrl = "/plugins.json";

  const rdPersonalizedColors = {
    rdGreen: "#7ebe2b",
    helloPurple: "#703d6f",
    nonBlack: "#4a4a4a",
    whitesmoke: "#f5f5f5",
    primaryBackground: "rgb(0, 0, 0)",
    secondaryBackground: "#3e434b"
  };

  var appConfig: any = {
    serviceBaseUrl: serviceBaseUrl + "/",
    pluginService: {
      enabled: true,
      url: pluginServiceUrl
    },
    sso: {
      accountSid: accountSid,
      tokenizerUrl: serviceBaseUrl + "/tokenizer"
    },
    // ytica: false,
    logLevel: "debug",
    showSupervisorDesktopView: true,
    componentProps: {
      AgentDesktopView: {
        showPanel2: true,
        showFeedback: true
      },
      LoginView: {
        logoUrl:
          "https://s3-us-west-1.amazonaws.com/media.rentdynamics.com/Logos/helloPurple.svg"
      },
      // CRMContainer: {
      //   uriCallback: (task) => { return task ? "https://www.bing.com/search?q=" + task.attributes.name : "http://bing.com/"; }
      // }
      MainHeader: {
        logoUrl:
          "https://s3-us-west-1.amazonaws.com/media.rentdynamics.com/Chat/helloLogo.svg"
      }
    }
  };
  appConfig.sdkOptions = {
    insights: {
      productId: "flex_insights"
    }
  };
  appConfig.ytica = {
    agentDashboardEnabled: true,
    supervisorDashboardEnabled: true,
    supervisorReportsEnabled: true,
    supervisorInspectionsEnabled: true,
    workspaceId: "WS9b4f1ccb72a435c7e0afcae1862018a8"
  };

  return appConfig;
}
