const fs = require('fs')

const extractTrace = require('./app');

test('simple test with job json containing a trace', () => {
  let job_raw = fs.readFileSync( "./job_with_trace.json" )
  let job_json = JSON.parse(job_raw)
  expect(extractTrace(job_json)).not.toBeNull();
});

test('simple test with job json not containing a trace', () => {
  let job_raw = fs.readFileSync( "./job_without_trace.json" )
  let job_json = JSON.parse(job_raw)
  expect(extractTrace(job_json)).toBeNull();
});