const year = []
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for (var i = 0; i < 22; i++) {
  year.push(2000 + i)
}

module.exports = { year, month }