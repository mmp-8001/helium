import {setProgress, init, destroy} from './progress';
import {notif} from "./notif";
const axios = require('axios');

function submit(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById('myForm'));
    let headers = {'Content-Type': 'multipart/form-data'};
    let config = {
        onUploadProgress: function (progress) {
            let percentCompleted = Math.round((progress.loaded * 100) / progress.total);
            setProgress(percentCompleted);
        },
        headers
    };
    init();
    axios.post('http://helium/api/submit', formData, config).then(function (response) {
        notif("success", "");
    }).catch(function (error) {
        let msg = error.response ? error.response.data.message : 'خطا در ارسال اطلاعات';
        notif("error", msg);
    }).finally(function () {
        destroy();
    });
}
document.getElementById("submit").addEventListener("click", submit);