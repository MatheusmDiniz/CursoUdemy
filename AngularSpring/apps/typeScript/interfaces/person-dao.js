"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../classes/person");
var PersonDAO = /** @class */ (function () {
    function PersonDAO() {
    }
    PersonDAO.prototype.insert = function (person) {
        console.log('inseting...', person.toString());
        return true;
    };
    PersonDAO.prototype.update = function (person) {
        return true;
    };
    PersonDAO.prototype.delete = function (id) {
        return true;
    };
    PersonDAO.prototype.find = function (id) {
        return null;
    };
    PersonDAO.prototype.findAll = function () {
        return [new person_1.Person('Mike')];
    };
    return PersonDAO;
}());
exports.PersonDAO = PersonDAO;
//# sourceMappingURL=person-dao.js.map