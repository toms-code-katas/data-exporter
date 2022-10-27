const fs = require('fs')
const os = require('os');
const path = require('path');

const { extractTrace, getJobStatus } = require('./app');

var tmpDir

beforeAll(() => {
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "data-exporter-"));
  console.debug("Created temporary dir " + tmpDir)
  tempFolder = "Test"
  return true
});

test('simple test with job json containing a trace', () => {
  let job_raw = fs.readFileSync( "./job_with_trace_success.json" )
  let job_json = JSON.parse(job_raw)
  expect(extractTrace(job_json)).not.toBeNull();
  expect(getJobStatus(job_json)).toBe("success");
});

test('simple test with job json not containing a trace', () => {
  let job_raw = fs.readFileSync( "./job_without_trace.json" )
  let job_json = JSON.parse(job_raw)
  expect(getJobStatus(job_json)).toBe("failed");
});

afterAll(() => {
  console.debug("Deleting temporary folder " + tmpDir)
  fs.rmdirSync(tmpDir)
  return true
});