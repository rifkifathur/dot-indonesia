import { DataResults } from './Data';
import { Container, Grid, Card, CardContent, Typography  } from "@mui/material";

type props = {
    dataWish: DataResults[]
} 

const Wishlist = ({dataWish}: props) => {
    return (
        <>
        <Container>
            <Grid container>
                {dataWish.map((article, index)=> 
                    <Card sx={{ maxWidth: 345, display: 'flex', m: 1}} key={index}>
                        <div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {article.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    You want to know the detail of planet {article.name}. click  detail below
                                </Typography>
                            </CardContent>                    
                        </div>                       
                    </Card>
                )}
            </Grid>
        </Container>
        </>
    );
};

export default Wishlist;