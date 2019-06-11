import { Manager } from '@twilio/flex-ui';
import { getAppConfig } from '../appConfig';
import { isProduction } from '../environments/environment';

export function updateConfig(newContext?: any) {
  /* FIXME: Make the DEV/PROD config ENV variable(s) instead */
  var dev = {
    accountSid: "AC003f2e2a422b9ba423d225cf97b1e37c",
    sso: { accountSid: "AC003f2e2a422b9ba423d225cf97b1e37c" },
    serviceBaseUrl: "scarlet-jackal-7912.twil.io"
  }

  var prod = {
    accountSid: "AC003f2e2a422b9ba423d225cf97b1e37c",
    sso: { accountSid: "AC003f2e2a422b9ba423d225cf97b1e37c" },
    serviceBaseUrl: "scarlet-jackal-7912.twil.io"
  }
  /* this is how we can publish the config within a plugin!! */
  return Object.assign({}, getAppConfig(), {
    logLevel: isProduction() ? "SILENT" : "DEBUG",
    context: Object.assign({}, getAppConfig().context || {}, newContext)
  }, isProduction() ? prod : dev);
}
