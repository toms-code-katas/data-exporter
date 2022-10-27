const fs = require('fs')

function extractTrace(job_json) {
    if (job_json.trace !== undefined)
        return job_json.trace
    return null
}

function getJobStatus(job_json) {
    return job_json.status
}

function processJob(job_json, root_folder) {
    job_trace = extractTrace(job_json)
    if (job_trace == null)
        return false
    job_status = getJobStatus(job_json)
    job_target_folder = root_folder + "/" + job_status
    if (!fs.existsSync(job_target_folder)){
        fs.mkdirSync(job_target_folder);
    }
    job_id = job_json.id
    fs.writeFileSync(job_target_folder + "/" + job_id, job_trace)
    return true
}

module.exports = { extractTrace, getJobStatus, processJob };