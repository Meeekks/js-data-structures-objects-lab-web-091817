// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  // const newObj = Object.assign({}, obj, {[key]: value});
  const newObj = {...obj};
  newObj[key] = value;

  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  // obj[key] = value;
  const newObj = Object.assign(obj, {[key]:value});

  return newObj;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver)
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
