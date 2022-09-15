import { Container, Box, Typography, Grid, Paper, styled } from '@mui/material';
import theme from '../../theme';
import CustomCard from '../customMinorComponents/CustomCard';

const CardItems = [
  {
    Title: 'Project Title',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url',
  },
  {
    Title: 'Project Title',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis eum maxime quidem cupiditate fuga debitis sequi, cum accusantium recusandae perspiciatis impedit! Corrupti delectus tempore ab aut maxime minus necessitatibus?',
    Tech: ['Python', 'Typescript', 'Next.js'],
    // github: 'url'
  },

];


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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
            <Typography sx={{fontWeight: 'Bold'}} variant='h4' gutterBottom>
              Noteworthy Projects
            </Typography>
            <Typography gutterBottom>view the archive - link</Typography>
          </Box>
          {/* <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 2, md: 3 }}>
              {CardItems.map((project) => (
                <Grid xs={6}>
                  <CustomCard
                    title={project.Title}
                    description={project.Description}
                    tech={project.Tech}
                  />
                </Grid>
              ))}
            </Grid>
          </Box> */}
          <Box sx={{ display: 'flex' }}>
            {CardItems.map((project, index) => (
              <CustomCard
                key={index}
                title={project.Title}
                description={project.Description}
                tech={project.Tech}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {CardItems.map((project, index) => (
              <CustomCard
                key={index}
                title={project.Title}
                description={project.Description}
                tech={project.Tech}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Projects;
