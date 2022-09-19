import { Container, Box, Typography, Grid} from '@mui/material';
import theme from '../../theme';
import CustomCard from '../customMinorComponents/CustomCard';

const CardItems = [
  {
    Title: 'Project Title 1',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title 2',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title 3',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title 4',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title 5',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title 6',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
];

function Projects() {
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.grey[900] }}>
        <Container maxWidth='md'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Typography sx={{ fontWeight: 'Bold' }} variant='h4' gutterBottom>
              Noteworthy Projects
            </Typography>
            <Typography gutterBottom>view the archive - link</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}>
              {CardItems.map((project, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <CustomCard
                    title={project.Title}
                    description={project.Description}
                    tech={project.Tech}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Projects;
