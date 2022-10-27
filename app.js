function extractTrace(job_json) {
    if (job_json.trace !== undefined)
        return job_json.trace
    return null
}

module.exports = extractTrace;