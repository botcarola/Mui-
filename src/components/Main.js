import Cards from "./Cards";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { typography } from '@mui/system';

const Main = () => {
    
    return(
        <Container
        sx={{
            display:"flex",
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: "center",
            alignContent: 'center'
        }}>
            <Typography
            variant="h4"
            component="h2"
            color="white"
            sx={{
                mt: 9,
            }}
            >
                Pricing
            </Typography>
            <Typography
            color="white"
            variant="h5"
            component="h2"
            width = "40%"
            sx={{
                mt:4,
            }}
            >
            Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.
            </Typography>
            

        </Container>
    )
}

export default Main;