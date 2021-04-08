const sequelize = require('../config/connection');
const { User, Entry, Comment } = require('../models');

const userData = require('./userData.json');
const entryData = require('./entryData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const entry of entryData) {
        await Entry.create({
            ...entry,
        });
    }

    process.exit(0);
}

seedDatabase();