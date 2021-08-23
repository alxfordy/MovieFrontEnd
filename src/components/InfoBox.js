import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import './InfoBox.css'

function InfoBox( { title, genres, tomatometer_rating, audience_rating }) {
    console.log(title)
    return (
        <div className="display__infobox">
            <Card>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                    {title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                    Genres: {genres}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                    Tomato Rating: {tomatometer_rating}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                    Audience Rating: {audience_rating}
                    </Typography>
                </CardContent>
            </Card>
        </div>
      );
}

export default InfoBox