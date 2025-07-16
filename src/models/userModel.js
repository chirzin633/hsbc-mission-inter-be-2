const db = require('../config/database');
const { formatDateTimeWIB } = require('../utils/formatDateWIB')

async function getAllUsers() {
    const [rows] = await db.query('SELECT * FROM user');
    const formattedUsers = rows.map(user => ({
        ...user, tgl_regist: formatDateTimeWIB(user.tgl_regist)
    }));
    return formattedUsers;
};

async function getUserById(id) {
    const [rows] = await db.query('SELECT * FROM user WHERE user_id = ?', [id]);
    const user = rows[0];
    user.tgl_regist = formatDateTimeWIB(user.tgl_regist);
    return user;
}

async function createUser(data) {
    const { name, jenis_kelamin, email, password, role } = data;
    const [result] = await db.query(
        `INSERT INTO user (name, jenis_kelamin, email, password, role, tgl_regist) VALUES (?,?,?,?,?, NOW())`, [name, jenis_kelamin, email, password, role]
    );
    return result.insertId;
}

async function updateUser(id, data) {
    const { name, jenis_kelamin, email, password, role } = data;
    const [result] = await db.query(
        `UPDATE user SET name = ?, jenis_kelamin = ?, email = ?, password = ?, role = ? WHERE user_id = ?`, [name, jenis_kelamin, email, password, role, id]
    );
    return result.affectedRows > 0;
};

async function deleteUser(id) {
    const [result] = await db.query(
        `DELETE FROM user WHERE user_id = ?`, [id]
    );
    return result.affectedRows > 0;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};