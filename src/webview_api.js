import axios from 'axios';

// axios.defaults.headers.common['access_token'] = store.state.user

export default class WebviewAPI {

    constructor(token) {
        axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URI;
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['access_token'] = token;
    }

    callbackWebview(sender, postback) {
        console.log("sender :", sender);
        console.log("postback :", postback);
        return new Promise((resolve, reject) => {
            axios.post('https://yupangco-music-academy.herokuapp.com/facebook/webhook',
                {
                    entry: [{
                        messaging: [{
                            sender: {
                                id: sender
                            },
                            postback: {
                                payload: postback
                            }
                        }]
                    }]
                })
                .then((result) => {
                    MessengerExtensions.requestCloseBrowser(
                        function success() {
                            resolve()
                            // webview closed
                        },
                        function error(err) {
                            reject(err)
                            // an error occurred
                        }
                    );
                }).catch((err) => {
                    reject(err)
                });
        })
    }

    submitEnrollment(details) {
        return axios.post('https://yupangco-music-academy.herokuapp.com/api/enrollment', details)
    }
}