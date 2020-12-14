module.exports = (sequelize, Sequelize) => {
  const Traffic = sequelize.define("traffic", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Traffic;
};
