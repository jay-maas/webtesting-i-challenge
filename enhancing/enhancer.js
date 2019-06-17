module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  const checkedItem = itemDurabilityChecker(item)
  if (checkedItem === null) {
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