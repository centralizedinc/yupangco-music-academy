const model = require('../models/ChatbotResponse')

class ChatbotResponseDao {
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
     * @param {Object} details 
     */
    static create(details) {
        return (new model(details)).save()
    }

    /**
     * @returns {Promise}
     * @param {Object} search 
     * @param {ChatbotResponse} updated_details 
     */
    static modify(search, updated_details) {
        return model.findOneAndUpdate(search, updated_details).exec()
    }

    /**
     * @returns {Promise}
     * @param {String} id 
     * @param {ChatbotResponse} updated_details 
     */
    static modifyById(id, updated_details) {
        return model.findByIdAndUpdate(id, updated_details).exec()
    }
}

module.exports = ChatbotResponseDao