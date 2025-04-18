import { useEffect, useState } from 'react';

const FetchDataEffect =  () => {

    const[data, setData] = useState([]);

    useEffect(()=>{

        async function getData(){
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();

            if(data && data.length){
                setData(data);
            }
        }

        getData();
    }, []);

    return (
        <div>
            Data Titles:
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default FetchDataEffect;