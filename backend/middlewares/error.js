
const error = (err, req, res, next) => {
    const status = err.status
    const msg = err.msg 
    const extra = err.extra 

    return res.status(status).json({msg, extra})
}

module.exports = error