import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Data, DataResults } from "./Data";
import { Button, Container, Grid, Card, CardActions, CardContent, Typography, Skeleton, Box } from "@mui/material";

const Listplanet = () => {
    const [articles, setArticles] = useState<DataResults[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function result() {
            const data = await Data()
            setArticles(data)
            setLoading(false)
        }
        result()
    }, []);
    
    return (
        <>
            <Container>
                <Grid container sx={{ my: 2 }}>
                    {(loading ? Array.from(new Array(3)) :
                        articles).map((article, index: number) =>
                            <Card key={index} sx={{ maxWidth: 345, m: 1 }}>
                                {article ?
                                    (<CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {article.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            You want to know the detail of planet {article.name}. click  detail below
                                        </Typography>
                                    </CardContent>) : (
                                        <Box sx={{ px: 1.5 }}>
                                            <h1><Skeleton sx={{ px: 7}} width="30%"/></h1>
                                            <Skeleton />
                                            <Skeleton />
                                        </Box>
                                    )
                                }
                                <CardActions>
                                    <Button size="small"><Link to={`/detailplanet/${index + 1}`} style={{ textDecoration: 'none' }}>Detail</Link></Button>
                                </CardActions>
                            </Card>
                        )}
                </Grid>
            </Container>
        </>
    );
}

export default Listplanet;