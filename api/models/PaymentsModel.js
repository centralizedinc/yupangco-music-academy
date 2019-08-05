var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentsModelSchema = new Schema({
    mode: {
        type: Number
        /**
         * 0 - credit card
         * 1 - ec pay
         */
    },
    details: {},
    date_created: {
        type: Date,
        default: new Date()
    },
    order_id: {
        type: String
    },
    reference_no: {
        type: String
    },
    sender: {
        type: String
    }
});


module.exports = mongoose.model('payments', PaymentsModelSchema);