import CustomTab from "../customMinorComponents/CustomTab";
import { Box, Container } from "@mui/material";
import theme from "../../theme";

function Work() {
    return (
      <Box sx={{ backgroundColor: theme.palette.grey[900] }}>
        <Container maxWidth='md' >
          {/* <CustomTab /> */}
        </Container>
      </Box>
    );
}

export default Work;
