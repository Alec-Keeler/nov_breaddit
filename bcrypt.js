const bcrypt = require('bcryptjs');

// Task 19a
async function generatePass(password) {
    const hashedPass = await bcrypt.hash(password, 12)
    console.log(hashedPass)
}

// generatePass('password1')
// $2a$08$61zh49oIfGB6s4eCj6HbD.1cngi11YZr12eGgaqiHKSpMHgNAnJ3u
// const hash = '$2a$12$viNwxcLx796iBvX2ceoWnehxGuVXnYllQLAorD1oAoRt9DK1irk96'
const hash = '$2a$17$jzRlk37wa.ypuW0KKLWTR.fDhnTsStgod16eBnQhwh/1TJZy9PmKm'

// Task 19b
async function checkPass(password, hash) {
    const isPass = await bcrypt.compare(password, hash)
    console.log(isPass)
}

checkPass('password1', hash)