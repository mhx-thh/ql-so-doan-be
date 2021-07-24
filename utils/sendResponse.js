module.exports = (data, statusCode, res) => {
    res.status(statusCode).json({
        status: 'success',
        data
    });
};