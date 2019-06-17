module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (itemEnchancementChecker(item) === null) {
    return { ...item }
  } else {
    if (item.enhancement === 20) {
      return { ...item }
    }
    if (item.enhancement < 0) {
      return { ...item, enhancement: 1 }
    }
    return { ...item, enhancement: ++item.enhancement };
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  if (itemDurabilityChecker(item) === null) {
    return { ...item }
  } else {
    return { ...item, durability: 100 };
  }
}

function get(item) {
  return { ...item };
}

function itemDurabilityChecker(item) {
  if(typeof item.durability === Number || String) {
    if(typeof item.durability === String) {
      item.durability = parseInt(item.durability)
    }
    if (item.durability <= 100) {
      return item
    } else {
      return item = null
    }
  } else {
    return item = null
  }
}

function itemEnchancementChecker(item) {
  if(typeof item.enhancement === Number || String) {
    if(typeof item.enhancement === String) {
      item.enhancement = parseInt(item.enhancement)
    }
    if (item.enhancement <= 20) {
      return item
    } else {
      return item = null
    }
  } else {
    return item = null
  }
}