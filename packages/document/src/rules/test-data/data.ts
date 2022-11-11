import fs from 'fs'
export default {
  loadSupplierData: () => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            const result = fs.readFileSync('./supplier-data.json', {encoding: "utf8"})
            resolve(JSON.parse(result))
        }, 2000);
    })
  }
}