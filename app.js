function extractTrace(job_json) {
    if (job_json.trace !== undefined)
        return job_json.trace
    return null
}

function didJobSucceed(job_json) {
    return (job_json.status !== undefined && job_json.status == "success")
}

module.exports = { extractTrace, didJobSucceed };