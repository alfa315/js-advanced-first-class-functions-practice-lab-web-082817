// Code your solution in this file!
function logDriverNames(drivers) {
  for (const driver of drivers) {
    console.log(driver.name)
  }
}

function logDriversByHometown(drivers, location) {
  for (const driver of drivers) {
    if (driver.hometown == location){
      console.log(driver.name)
    }
  }
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  let total = 0;
  for (const driver of drivers) {
    total += driver.revenue
  }
  return total;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length
}
