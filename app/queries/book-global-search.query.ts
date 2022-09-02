import { Op } from "sequelize";
function globalSearchQuery(text: String){
    const searchQueries:any = [];
    searchQueries.push({
        book_name: { [Op.iLike]: `%${text}%`},
    });
    searchQueries.push({
        book_author: { [Op.iLike]: `%${text}%`},
    });
    searchQueries.push({
        description: { [Op.iLike]: `%${text}%`},
    });
    searchQueries.push({
        "$users.name": { [Op.iLike]: `%${text}%`},
    });
    return {
        [Op.or]: searchQueries,
    };
}
export default globalSearchQuery;