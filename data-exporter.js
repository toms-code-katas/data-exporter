const fs = require('fs')
const os = require('os');
const path = require('path');
const { MongoClient } = require("mongodb");
const { processJob } = require('./job-processor');

const uri =
  "mongodb://localhost:27017?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('gitlab');
    const pipelines = database.collection('pipelines');
    const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "data-"));

    const all_jobs = await pipelines.find({}, {"jobs": 1, _id: 0});

    await all_jobs.forEach((jobs) => {
      if (jobs.jobs !== undefined) {
        jobs.jobs.forEach((job) => {
          processJob(job, dataDir)
        });
      }
    });
  }
  finally {
    await client.close();
  }
}
run().catch(console.dir);