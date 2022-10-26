const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob; // allows to execute something on schedule

const tweet = async () => {
  try {
    await rwClient.v1.tweet("gm");
  } catch (e) {
    console.log(e);
  }
};

// it's programmed to call the function everyday at 5am
const job = new CronJob("0 5 * * *", () => {
  tweet();
});
