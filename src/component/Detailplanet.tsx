import { useState, useEffect } from 'react';
import { Detail, DataResults } from './Data';
import { useParams } from 'react-router-dom';
import { Container, Card, CardContent, Typography, CardActions, ToggleButton, Skeleton } from '@mui/material';
import { Favorite } from '@mui/icons-material';

type props = {
    handle: (data: DataResults) => void;
    data: DataResults[];
}
const Detailplanet = ({ handle, data }: props) => {

    const params = useParams();
    const [article, setArticle] = useState<DataResults>({} as DataResults);
    const [loading, setLoading] = useState(true);
 
    useEffect(() => {
        async function result() {
            const data = await Detail(Number(params.id))
            setArticle(data)
            setLoading(false)
        }
        result()
    }, [params])

    const isDataExist = data.find(item => item.name === article.name)
    const isBoolData = isDataExist ? true : false
    const handleWishlist = () => {
        handle(article)
    }

    return (
        <>
            <Container sx={{ my: 4 }}>
                <Card sx={{ maxWidth: 600, display: 'flex', mx: 'auto', justifyContent: 'space-between' }}>
                    {loading ? (
                        <Skeleton
                            sx={{ bgcolor: 'grey' }}
                            variant="rectangular"
                            width={210}
                            height={118}
                        />
                    ) : (
                        <CardContent sx={{ bgcolor: 'red', flex: 1 }}>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                {article.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                name: {article.name} <br></br>
                                climate: {article.climate} <br></br>
                                diameter: {article.diameter} <br></br>
                                gravity: {article.gravity} <br></br>
                                orbital_period: {article.orbital_periode} <br></br>
                                population: {article.population} <br></br>
                                rotation_period: {article.rotation_periode} <br></br>
                                surface_water: {article.surface_water} <br></br>
                                terrain: {article.terrain} <br></br>
                            </Typography>
                        </CardContent>
                    )}
                    <CardActions>
                        <ToggleButton
                            color="error"
                            value="favorites"
                            selected={isBoolData ? true : false}
                            onChange={
                                handleWishlist
                            }>
                            <Favorite />
                        </ToggleButton>
                    </CardActions>
                </Card>
            </Container>
        </>
    );
};

export default Detailplanet;