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
        firtname: Sequelize.STRING,
        lastame: Sequelize.STRING,
        fatherfirstname: Sequelize.STRING,
        motherfirstname: Sequelize.STRING,
        motherlastname: Sequelize.STRING,
        ninanumber: Sequelize.STRING,
        receiptnumber: Sequelize.STRING,
        birthdate: Sequelize.DATE,
    } , {timestamps: false, freezeTableName: true}
);


DB.sync({force: false});

