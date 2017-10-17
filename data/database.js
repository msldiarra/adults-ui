import Sequelize from 'sequelize';

export const DB = new Sequelize(
    'ctdecadults',
    'postgres',
    '1234',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
);


export const Adult = DB.define('adult', {
        firstname: Sequelize.STRING,
        lastname: Sequelize.STRING,
        fatherfirstname: Sequelize.STRING,
        motherfirstname: Sequelize.STRING,
        motherlastname: Sequelize.STRING,
        ninanumber: Sequelize.STRING,
        receiptnumber: Sequelize.STRING,
        placeofbirth: Sequelize.STRING,
        placeofresidence: Sequelize.STRING,
        birthdate: Sequelize.DATE,
    } , {timestamps: false, freezeTableName: true}
);


DB.sync({force: false});

