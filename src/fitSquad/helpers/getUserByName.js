import { users } from "./data";

export const getUserByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return users.filter(
        user => user.name.toLocaleLowerCase().includes( name )
    );

}
