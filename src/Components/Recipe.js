
import { Stack } from '@mui/material'
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import * as React from 'react';




const Recipe = ({ data, idx }) => {


    return (
        <div key={idx}>

            <Stack >
                <Card key={idx} sx={{ backgroundColor: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)", boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",textAlign:"center",height:"100vh"}} >
                    <CardContent   >
                        <Typography key={idx} variant="h3" style={{ textAlign: "center",color:"linear-gradient(90deg, #d53369 0%, #daae51 100%)",display:"inline-block",fontSize:"20px",fontStyle:"italic" }}>
                            {data.recipe.label}
                            <hr />
 </Typography>
 </CardContent>
 <hr />
                    <CardActionArea  >
                        <CardMedia className='image' key={idx} component="img" image={data.recipe.image}/>
                        <hr className='hor' />
                        {/* <CardContent>
                        </CardContent> */}
                    </CardActionArea>
                    <CardContent key={idx} sx={{ margin:"10px",padding:"0",marginTop:"1rem",paddingTop:"80px",paddingLeft:"10px"}}>
                            <Stack >
                                <Typography variant='h5' sx={{ fontWeight:"bold",fontStyle:"italic",color:"green" }}>Totalcalories:{Math.round(data.recipe.calories)}</Typography>
                                <Typography variant='h5'  >{data.recipe.cuisineTpe}</Typography>
                                <Typography variant='h5'sx={{ fontWeight:"bold",fontStyle:"italic",color:"green" }}  >Dishtype:{data.recipe.dishType}</Typography>
                            </Stack>
                    </CardContent>
                </Card>
            </Stack>

        </div>

    )
}

export default Recipe;




