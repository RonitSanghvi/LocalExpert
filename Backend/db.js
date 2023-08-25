let port = 8000

let username= "ronitsanghvi2000"
let password= "AJCFUSrMws3ZB1R5"

let remoteUri = `mongodb+srv://${username}:${password}@destinationappcluster.p42lry2.mongodb.net/collections`

module.exports = {
    port: port,
    remoteUri: remoteUri
}