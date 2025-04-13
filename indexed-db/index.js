/*
  Uses of indexDB storage:
  - Cache user generated data
  - Temporarily store data before submit to server
  - Data for offline usage (web app runs offline)
  - Quick reloading frequent needed data
*/
// See doc: https://jensarps.de/2011/11/25/working-with-idbwrapper-part-1/

const customers = new IDBStore({
  dbVersion: 1,
  storeName: 'customer',
  keyPath: 'id',
  autoIncrement: true,
  onStoreReady: function () {
    console.log('Store ready!');
  }
})

const customer1 = {
  name: "Jane",
  age: 34,
  emails: [
    'jane@123',
    'jane@456',
  ]
}

const onSuccessPut = (id) => console.log(`Success, recorded customer ID: ${id}`)
const onFailurePut = (error) => console.log(`Failure putting: ${error}`)
const onSuccessGetAll = (data) => console.log(`All stored data: ${data}`)
const onFailureGetAll = (error) => console.log(`Failure getting: ${error}`)

customers.put(customer1, onSuccessPut, onFailurePut)

customers.getAll(onSuccessGetAll, onFailureGetAll)




// const button = document.getElementById("show-store")
// const displayDiv = document.getElementById("display")

// const db = await openDB("contacts", 1, {
//   upgrade(db) { //creates a new database if it doesnt exist
//     const store = db.createObjectStore("contacts", {
//       keyPath: 'the_id', //'the_id' will be the key of each stored obj
//       autoIncrement: true, //auto-increment the_id if not set explicitly
//     })

//     store.createIndex("name", "name")
//   }
// })

// await db.add('contacts', {
//   name: "Radha krishna",
//   age: 1000000,
//   email: 'radhakrishna@gmail.com'
// })

// button.addEventListener('click', async () => {
//   const storedData = await db.getAllFromIndex("contacts", "name")

//   displayDiv.textContent = JSON.stringify(storedData, null, 2)
// })