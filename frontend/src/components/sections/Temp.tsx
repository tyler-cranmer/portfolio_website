import React from 'react';
import { useAxios } from '../../hooks/useAxios';
import { Typography } from '@mui/material';
import Skill from '../customMinorComponents/Skill';
import {TechData }from '../../../types'

type Props = {};

function Temp({}: Props) {
  const [loading, data, error, request] = useAxios<TechData>({
    method: 'GET',
    url: 'http://127.0.0.1:8000/technologies/',
  });

    if (loading) return <Typography color='black'>loading... </Typography>
    
    if (error !== '') return <Typography color='black'> {error} </Typography>;

    if (!data) return <Typography color='black'> Data was null </Typography>;
    return (
      <div>
        {data.map((u) => (
          // <Typography color='black' key={u.id}>
          //     {u.id}{u.name}
          //     </Typography>
          <Skill key={u.id} name={u.name} url={u.icon} inView={true} />
        ))}
      </div>
    );
}

export default Temp;

// function Temp({}: Props) {
//   const [technologies, setTechnologies] = React.useState<Array<TechData>>([]);

//   const fetchTechnologies = () => {
//     axios
//       .get('http://127.0.0.1:8000/technologies/')
//       .then((response) => {
//         setTechnologies(response.data);
//         console.log(response.data);
//       })
//       .catch((err) => console.log(err));
//   };

//   React.useEffect(() => {
//     fetchTechnologies();
//   }, []);

//   return (
//     <div>
//       {technologies.map((u) => (
//         // <Typography color='black' key={u.id}>
//         //     {u.id}{u.name}
//         //     </Typography>
//         <Skill key={u.id} name={u.name} url={u.icon} inView={true} />
//       ))}
//     </div>
//   );
// }
