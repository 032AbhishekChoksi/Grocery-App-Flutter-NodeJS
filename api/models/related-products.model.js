const mongoose = require('mongoose');

const relatedProduct = mongoose.model(
    'RelatedProduct',
    mongoose.Schema(
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            relatedProduct: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        },
        {
            toJSON: {
                tranform: function (doc, ret) {
                    delete ret._id;
                    delete ret.__v;
                }
            }
        },
        {
            timestamps: true
        }
    )
);

module.exports = {
    relatedProduct
}