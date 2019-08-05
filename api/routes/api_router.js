'use strict'

var axios = require('axios');
var express = require('express');

var api_router = express.Router();
const OrdersDao = require('../dao/OrdersDao')
const PaymentsDao = require('../dao/PaymentsDao')

api_router
    .route('/enrollment')
    .post((req, res) => {
        var result = {}
        OrdersDao
            .create(req.body.details)
            .then((order) => {
                result.order = order;
                var payments = req.body.payments_details;
                payments.order_id = order._id;
                return PaymentsDao.create(payments)
            })
            .then((payments) => {
                result.payments = payments;
                res.json({
                    success: true,
                    model: result
                })
            })
            .catch((err) => {
                res.json({
                    success: false,
                    errors: err
                })
            });
    })

module.exports = api_router;