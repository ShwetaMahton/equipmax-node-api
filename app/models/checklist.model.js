module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("checklist", {
        checklistField: {
        type: Sequelize.STRING
      },
      checklistDataType: {
        type: Sequelize.STRING
      },
      isMandatory: {
        type: Sequelize.BOOLEAN
      },
      isActive: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Checklist;
  };