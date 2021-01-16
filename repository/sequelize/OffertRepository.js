
const User = require('../../model/sequelize/User');
const Offert = require('../../model/sequelize/Offert');
const Artwork = require('../../model/sequelize/Artwork');


exports.getOffert = () => {
    return Offert.findAll();
};

exports.getOffertkById = (offert_id) => {
    return Offert.findByPk(offert_id, {
        indlude: [
            {
                model: User,
                as: 'owner'
            },
            {
                model: User,
                as: 'buyer'
            },
            {
                model: Artwork,
                as: 'artwork'
            }]

    });
};
exports.getOffertForUser = (user_id) => {
    return Offert.findAll({
        where: {
            owner_id: user_id
        }
    });

}
exports.getOffertForArtwork = (artwork_id) => {
    return Offert.findAll({
        where: {
            artwork_id: artwork_id
        }
    });

}
exports.createOffert = (offert) => {
    return Offert.create({
        title: offert.title,
        description: offert.description,
        price: offert.price,
        owner_id: offert.owner_id,
        customer_id: offert.customer_id,
        purcharseDate: offert.purcharseDate,
        artwork_id: offert.artwork_id
    })
};
exports.updateOffert = (offert_id, offertData) => {
    const title = offertData.title;
    const description = offertData.description;
    const price = offertData.price;
    const owner_id = offertData.owner_id;
    const customer_id = offertData.customer_id;
    const purcharseDate = offertData.purcharseDate;
    const artwork_id = offertData.artwork_id;

    return Offert.update(offertData, { where: { _id: offert_id } });
}
exports.deleteOffert = (offert_id) => {
    return Offert.destroy({ where: { _id: offert_id } })
}