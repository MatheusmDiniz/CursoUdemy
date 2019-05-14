import { Person } from './../classes/person';
import { DaoInterface } from './dao.interface';
import { PersonDAO } from './person-dao';
let personDao : DaoInterface = new PersonDAO();

let person: Person = new Person('Mike');

personDao.insert(person);