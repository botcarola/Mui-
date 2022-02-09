import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

const Nav = () => {

    return(
        <Box
        sx={{            
            backgroundColor: '#0A1929',
            display: 'flex',
            justifyContent: 'space-between',
            p: 2,
          }}
        >
            <Typography 
            variant="h6"
            component="h2"
            color="white"
            > 
                Company name 
            </Typography>
            <div>
                <Link href="#" underline="none"
                sx={{
                    color:"#35C3E7",
                    m:2,
                }}>
                    Features                    
                </Link>
                <Link href="#" underline="none"
                sx={{
                    color:"#35C3E7",
                    m:2,
                }}>
                    Enterprise                    
                </Link>
                <Link href="#" underline="none"
                sx={{
                    color:"#35C3E7",
                    m:2,
                }}>
                    Support                    
                </Link>
                <Button>
                    Login
                </Button>
                


            </div>
        </Box>


    )
}

export default Nav;

