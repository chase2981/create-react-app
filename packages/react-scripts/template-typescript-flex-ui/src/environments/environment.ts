/* 
RELEASING REMOTELY - May 24, 2019 - CWG
If all you are doing is releasing to production, all you need to change is the following environment
const to true because we don't self host and therefore we don't control the production release's index.html--so changing
the index.html file won't matter once released because our index.html file isn't technically released. (Read below for more insight)
To reiterate, the only thing that you need to change when releasing to production is the following environment const.
*/

/* 
DEVELOPING LOCALLY - May 24, 2019 - CWG
In order to develop the app in PRODUCTION mode LOCALLY, 
you must change the following environment const to true
as well as change the appConfig <script /> referenced in the index.html from "appConfig.js" to "appConfigProd.js".
(Mainly relevant when working on the task-lookup page whereas it uses the reporting-api which only has production mode
    and therefore tasks from our production flex account are all that are returned--which require us to play flex in
    production mode in order to use its <MessagingCanvas />, among other things) 
*/

export const environment = {
    production: false
}

export function isProduction() {
    // return process.env.NODE_ENV === "production";
    return environment.production;
}

export function isHostedByTwilio() {
    return location.host === 'flex.twilio.com';
}
