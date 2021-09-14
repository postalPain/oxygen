const fs = require('fs');

const changeBaseUrl = async () => new Promise((resolve, reject) => {
  let BASE_URL = process.argv.find(val => val.includes('BASE_URL'));
  BASE_URL = BASE_URL.replace('BASE_URL=', '');

  if (BASE_URL) {
    fs.readFile('.env.production', 'utf-8', (readErr, data) => {
      if (readErr) throw readErr;

      const newValue = data.replace('BASE_URL=$BITRISE_BASE_URL', `BASE_URL=${BASE_URL}`);

      fs.writeFile('.env.production', newValue, 'utf-8', (writeErr) => {
        if (writeErr) throw writeErr;
        resolve();
      });
    });
  } else reject();
});

const changeEnv = async () => new Promise((resolve, reject) => {
  let BITRISE_TRIGGERED_WORKFLOW_TITLE = process.argv.find(val => val.includes('BITRISE_TRIGGERED_WORKFLOW_TITLE'));
  BITRISE_TRIGGERED_WORKFLOW_TITLE = BITRISE_TRIGGERED_WORKFLOW_TITLE.replace('BITRISE_TRIGGERED_WORKFLOW_TITLE=', '');

  if (BITRISE_TRIGGERED_WORKFLOW_TITLE) {
    fs.readFile('.env.production', 'utf-8', (readErr, data) => {
      if (readErr) throw readErr;
      const env = BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('release')
        ? 'production'
        : BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('staging')
          ? 'staging'
          : 'dev';
      const newValue = data.replace('ENV=$BITRISE_TRIGGERED_WORKFLOW_TITLE', `ENV=${env}`);

      fs.writeFile('.env.production', newValue, 'utf-8', (writeErr) => {
        if (writeErr) throw writeErr;
        resolve();
      });
    });
  } else reject();
});

const changeSocketVariables = async () => new Promise(resolve => {
  let BITRISE_PUSHER_KEY = process.argv.find(val => val.includes('BITRISE_PUSHER_KEY'));
  BITRISE_PUSHER_KEY = BITRISE_PUSHER_KEY.replace('BITRISE_PUSHER_KEY=', '');

  let BITRISE_WS_HOST = process.argv.find(val => val.includes('BITRISE_WS_HOST'));
  BITRISE_WS_HOST = BITRISE_WS_HOST.replace('BITRISE_WS_HOST=', '');

  let BITRISE_WWS_HOST = process.argv.find(val => val.includes('BITRISE_WWS_HOST'));
  BITRISE_WWS_HOST = BITRISE_WWS_HOST.replace('BITRISE_WWS_HOST=', '');

  fs.readFile('.env.production', 'utf-8', (readErr, data) => {
    if (readErr) throw readErr;
    let newValue = data.replace('PUSHER_KEY=$BITRISE_PUSHER_KEY', `PUSHER_KEY=${BITRISE_PUSHER_KEY}`);
    newValue = newValue.replace('PUSHER_WS_HOST=$BITRISE_WS_HOST', `PUSHER_WS_HOST=${BITRISE_WS_HOST}`);
    newValue = newValue.replace('PUSHER_WWS_HOST=$BITRISE_WWS_HOST', `PUSHER_WWS_HOST=${BITRISE_WWS_HOST}`);

    fs.writeFile('.env.production', newValue, 'utf-8', (writeErr) => {
      if (writeErr) throw writeErr;
      resolve();
    });
  });
});

const rewriteFirebaseIosFile = async () => new Promise((resolve, reject) => {
  let BITRISE_TRIGGERED_WORKFLOW_TITLE = process.argv.find(val => val.includes('BITRISE_TRIGGERED_WORKFLOW_TITLE'));
  BITRISE_TRIGGERED_WORKFLOW_TITLE = BITRISE_TRIGGERED_WORKFLOW_TITLE.replace('BITRISE_TRIGGERED_WORKFLOW_TITLE=', '');

  if (BITRISE_TRIGGERED_WORKFLOW_TITLE) {
    const filePath = BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('release')
      ? 'bitrise_files/production/GoogleService-Info.plist'
      : 'bitrise_files/dev/GoogleService-Info.plist';
    const data = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync('ios/GoogleService-Info.plist', data, 'utf-8');
    resolve();
  } else reject();
});

const rewriteFirebaseAndroidFile = async () => new Promise((resolve, reject) => {
  let BITRISE_TRIGGERED_WORKFLOW_TITLE = process.argv.find(val => val.includes('BITRISE_TRIGGERED_WORKFLOW_TITLE'));
  BITRISE_TRIGGERED_WORKFLOW_TITLE = BITRISE_TRIGGERED_WORKFLOW_TITLE.replace('BITRISE_TRIGGERED_WORKFLOW_TITLE=', '');

  if (BITRISE_TRIGGERED_WORKFLOW_TITLE) {
    const filePath = BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('release')
      ? 'bitrise_files/production/google-services.json'
      : 'bitrise_files/dev/google-services.json';
    const data = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync('android/app/google-services.json', data, 'utf-8');
    resolve();
  } else reject();
});

const changeAirshipAndroidVariables = async () => new Promise((resolve, reject) => {
  let BITRISE_TRIGGERED_WORKFLOW_TITLE = process.argv.find(val => val.includes('BITRISE_TRIGGERED_WORKFLOW_TITLE'));
  BITRISE_TRIGGERED_WORKFLOW_TITLE = BITRISE_TRIGGERED_WORKFLOW_TITLE.replace('BITRISE_TRIGGERED_WORKFLOW_TITLE=', '');

  if (BITRISE_TRIGGERED_WORKFLOW_TITLE) {
    const filePath = BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('release')
      ? 'bitrise_files/production/airshipconfig.properties'
      : 'bitrise_files/dev/airshipconfig.properties';
    const data = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync('android/app/src/main/assets/airshipconfig.properties', data, 'utf-8');
    resolve();
  } else reject();
});

const changeAirshipIosVariables = async () => new Promise((resolve, reject) => {
  let BITRISE_TRIGGERED_WORKFLOW_TITLE = process.argv.find(val => val.includes('BITRISE_TRIGGERED_WORKFLOW_TITLE'));
  BITRISE_TRIGGERED_WORKFLOW_TITLE = BITRISE_TRIGGERED_WORKFLOW_TITLE.replace('BITRISE_TRIGGERED_WORKFLOW_TITLE=', '');

  if (BITRISE_TRIGGERED_WORKFLOW_TITLE) {
    const filePath = BITRISE_TRIGGERED_WORKFLOW_TITLE.includes('release')
      ? 'bitrise_files/production/AirshipConfig.plist'
      : 'bitrise_files/dev/AirshipConfig.plist';
    const data = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync('ios/AirshipConfig.plist', data, 'utf-8');
    resolve();
  } else reject();
});

(async () => {
  try {
    await changeBaseUrl();
    await changeEnv();
    await changeSocketVariables();
    await rewriteFirebaseIosFile();
    await rewriteFirebaseAndroidFile();
    await changeAirshipAndroidVariables();
    await changeAirshipIosVariables();
  } catch (error) {
    console.log('error', error);
  }
})();
