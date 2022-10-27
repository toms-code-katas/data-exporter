function extractTrace(job_json) {
    if (job_json.trace !== undefined)
        return job_json.trace
    return null
}

function getJobStatus(job_json) {
    return job_json.status
}

module.exports = { extractTrace, getJobStatus };