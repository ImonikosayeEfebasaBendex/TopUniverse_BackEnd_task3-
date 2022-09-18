const errorFunction = (errorBit, msg, data) => {
    if (errorBit) return {is_error: errorBit, message: msg};

    else return { is_error: errorBIt, message: msg, data};
};

module.exports = errorFunction;