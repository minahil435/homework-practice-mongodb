const Product = require("../model/Product")

module.exports = {
    getAllProducts: function (callback) {
        Product.find({}, function (err, payload) {
            if (err) {
                callback(err, null)
            }
            else {
                callback(null, payload)
            }

        })
    },

    getProductByID: function (id, callback) {
        Product.find({ _id: id }, function (err, payload) {
            if (err) {
                callback(err, null)
            }
            else {
                callback(null, payload)
            }

        })
    },

    createProduct: function (body, callback) {
        let createdProduct = new Product({
            Name: body.Name,
        })
        createdProduct.save(function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            }
        })
    },

    updateProductByID: function (id, body, callback) {
        Product.findByIdAndUpdate({ _id: id }, body, { new: true }, function (err, updatedPayload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, updatedPayload);
            }

        })
    },

    deleteProductByID: function (id, callback) {
        Product.findByIdAndRemove({ _id: id }, function (err, payload) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, payload);
            }
        })
    }

}