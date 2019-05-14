import { Person } from './../classes/person';
import { DaoInterface } from './dao.interface';
export class PersonDAO implements DaoInterface{

    tableName: string;

    insert(person:Person): boolean{
        console.log('inseting...', person.toString());
        return true;
    }

    update(person: Person): boolean{
        return true;
    }
    
    delete(id: number): boolean{
        return true;
    }
   
    find(id: number): Person{
        return null;
    }

    findAll(): [Person]{
        return [new Person('Mike')];
    }
}