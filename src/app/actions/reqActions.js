const axios = require('axios');
axios.defaults.baseURL = ("http://localhost:3000/api");

const doPost = async (url, data = {}) => {
    try {
        const res = await axios.post(url, data);
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
}

const doPatch = async (url, data) => {
    try {
        const res = await axios.patch(url, data);
        return res;
    }
    catch (error) {
        console.log({ status: 500 }, error);
    }
}

const doDelete = async (url, data) => {
    try {
        const res = await axios.delete(url, data);
        return res.data;
    }
    catch (error) {
        console.log({ stats: 500 }, { msg: "data is not deleted" }, error)
    }
}

export { doPost, doPatch, doDelete };