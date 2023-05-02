import axios from 'axios';
import { useEffect, useState } from 'react';


export const fitSquadApi = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('../fitSquad/helpers/data.js')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    return {
        users,

    }
}
