import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ResourceTile from './ResourceTile';

interface Props{
    resources: Array<any>;
}

function ResourceGrid({ resources }: Props){    
    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {resources.map((resource, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
                <ResourceTile resourceData={resource} index={index}/>
            </Grid>
        ))}
        </Grid>
    );
}


export default ResourceGrid