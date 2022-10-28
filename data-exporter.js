const { MongoClient } = require("mongodb");

const uri =
  "mongodb://localhost:27017?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('gitlab');
    const pipelines = database.collection('pipelines');

    const pipeline = await pipelines.findOne({});

    console.log(pipeline);
  }
  finally {
    await client.close();
  }
}
run().catch(console.dir);