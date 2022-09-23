
import { Box, Container, Typography } from "@mui/material";
import theme from "../../theme";
import CustomAccordian from "../customMinorComponents/CustomAccordian";
function Work() {
    return (
      <Box
        sx={{
          backgroundColor: theme.palette.grey[900],
          minHeight: '80vh',
        }}>
        <Container maxWidth='md'>
          <Box
            pt={12.5}
            mb={2.5}
            pb={2.5}
            sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 'Bold' }}>
              Professional Experience
            </Typography>
          </Box>
          <CustomAccordian />
        </Container>
      </Box>
    );
}

export default Work;
