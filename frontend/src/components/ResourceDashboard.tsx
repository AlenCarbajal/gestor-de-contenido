import {ResourceTable} from './ResourceTable';
import { useState } from 'react';
import axios from 'axios';
import ResourceGrid from './ResourceGrid';

function ResourceDashboard(){
    const [resources, setResources] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchData() {
        try{
            const res = await axios.get('http://localhost:3000/api/resources');
            if(res.status !== 200){
                throw new Error('Error fetching data');
            }
            setResources(res.data);
            setLoading(false);
        } catch(err: any){
            setError(err.message);
            setLoading(false);
        }
        
    }
    if(loading === true)
        fetchData();
    return (
        <div>
            {
                loading ? (<h1>Loading...</h1>):
                error? (<h1>Error:{error}</h1>):
                (<ResourceGrid resources={resources}/>)
            }
        </div>
    );
}

export {ResourceDashboard}