export const insertUserSql = "INSERT INTO user (name, nickname, email, pw, phone, b_date, alarm, created, status, provider) VALUES (?,?,?,?,?,?,?,?,?,?)";

export const confirmEmailSql = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const confirmNicknameSql = "SELECT EXISTS(SELECT 1 FROM user WHERE nickname = ?) as isExistNickname";

export const checkUserkSql = "SELECT EXISTS(SELECT 1 FROM user WHERE name = ? AND email = ? ) as isExistUser";

export const updateUserPwSql = "UPDATE user SET pw = ?, update_date = ?, salt = ? WHERE email = ?";

export const getStoredPw = "SELECT pw, salt FROM user WHERE email = ?"
