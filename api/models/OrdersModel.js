var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrdersModelSchema = new Schema({
    order: {
        course: {
            type: String
        },
        level: {
            type: String
        },
        lesson: {
            type: String
        }
    },
    student: {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        gender: {
            type: String
        },
        age: {
            type: String
        },
        birthdate: {
            type: String
        }
    },
    payor: {
        name: {
            type: String
        },
        contact: {
            type: String
        },
        email: {
            type: String
        }
    },
    address_details: {
        address: {
            type: String
        },
        type: {
            type: String
        },
        city: {
            type: String
        },
        province: {
            type: String
        },
        zip_code: {
            type: String
        }
    },
    additional_info: {
        type: String
    },
    sender: {
        type: String
    },
    date_created: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('orders', OrdersModelSchema);