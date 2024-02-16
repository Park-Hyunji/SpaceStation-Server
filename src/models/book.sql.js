export const createBookSql = "INSERT INTO book (book_id, title, intro, category, thumbnail, create_at, user_id) "
                                + "VALUES (?, ?, ?, ?, ?, ?, ?);";

export const createBookContentsSql = "INSERT INTO bookContents (book_contents_id, content_title, content_text, content_create_at, `index`, book_id) "
                                + "VALUES (?, ?, ?, ?, ?, ?);";
export const createBookContentsImgSql = "INSERT INTO bookImage (book_image_id, image, index_id) "
                                + "VALUES (?, ?, ?);";

export const readBookListAllSql = "SELECT * FROM book;";
export const readBookListSql = "SELECT * FROM book WHERE category = ?;";
export const readBookSql = "SELECT * FROM book AS b INNER JOIN user AS u ON u.id = b.user_id WHERE b.book_id = ?;";
export const readBookContentsSql = "SELECT * FROM bookContents AS bc "
                                + "INNER JOIN bookImage AS bi ON bc.book_contents_id = bi.index_id "
                                + "WHERE bc.book_id = ? ORDER BY `index`;";
export const readBookContentSql = "SELECT * FROM bookContents AS bc "
                                + "INNER JOIN bookImage AS bi ON bc.book_contents_id = bi.index_id "
                                + "WHERE bi.index_id = ? ORDER BY `index`;";

export const updateBookSql = "UPDATE book "
                            + "SET title = ?, intro = ?, category = ? "
                            + "WHERE book_id = ?;";
export const updateBookContentsSql = "UPDATE bookContents "
                                + "SET content_title = ?, content_text = ?, `index` = ? "
                                + "WHERE book_contents_id = ?;";
// 사진 수정

export const deleteBookSql = "DELETE FROM book WHERE book_id = ?;";
export const deleteBookContentsSql = "DELETE FROM bookContents WHERE book_id = ?;";
export const deleteBookContentsImgSql = "DELETE FROM bookImage WHERE index_id = ?;";

export const searchBookContentsIdByBookIdSql = "SELECT book_contents_id FROM bookContents WHERE book_id = ?;";

export const checkBookUserSql = "SELECT user_id FROM book WHERE book_id = ?;";