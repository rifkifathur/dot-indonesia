import axios from "axios";

export interface DataResults {
    climate: string;
    created: string;
    diameter: number;
    films: string[];
    gravity: string;
    name: string;
    orbital_periode: number;
    population: number;
    residents: string[];
    rotation_periode: number;
    surface_water: number;
    terrain: string;
    url: string;
}
 
export const Data = () => {
        return(
            axios.get('https://swapi.dev/api/planets')
            .then((res) => {
                const response = res.data.results
                return response;
            })
            .catch(err => console.log(err))
        )
}

export const Detail = (props: number) => {
    return(
        axios.get(`https://swapi.dev/api/planets/${props}`)
        .then(res => {
            const response = res.data
            return response;
        })
        .catch(err => console.log(err))
    )
}
