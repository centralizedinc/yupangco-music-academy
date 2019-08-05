const model = require('../models/PaymentsModel')

class PaymentsDao {
    /**
     * @returns {Promise}
     * @param {Object} search 
     */
    static find(search) {
        return model.find(search || {}).exec()
    }

    /**
     * @returns {Promise}
     * @param {Object} search 
     */
    static findOne(search) {
        return model.findOne(search).exec()
    }

    /**
     * @returns {Promise}
     * @param {String} id 
     */
    static findById(id) {
        return model.findById(id).exec()
    }

    /**
     * @returns {Promise}
     * @param {PaymentsModel} details 
     */
    static create(details) {
        return (new model(details)).save()
    }

    /**
     * @returns {Promise}
     * @param {Object} search 
     * @param {PaymentsModel} updated_details 
     */
    static modify(search, updated_details) {
        return model.findOneAndUpdate(search, updated_details).exec()
    }

    /**
     * @returns {Promise}
     * @param {String} id 
     * @param {PaymentsModel} updated_details 
     */
    static modifyById(id, updated_details) {
        return model.findByIdAndUpdate(id, updated_details).exec()
    }
}

module.exports = PaymentsDao