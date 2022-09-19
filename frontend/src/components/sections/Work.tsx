import CustomTab from "../customMinorComponents/CustomTab";
import { Box, Container, Typography } from "@mui/material";
import theme from "../../theme";

function Work() {
    return (
      <Box
        sx={{ backgroundColor: theme.palette.grey[900], minHeight: '80vh' }}>
        <Container maxWidth='md'>
          <Box mb={2.5} pb={2.5}>
            <Typography variant='h4' sx={{ fontWeight: 'Bold' }}>
              Where I've worked
            </Typography>
          </Box>
          <CustomTab />
        </Container>
      </Box>
    );
}

export default Work;
