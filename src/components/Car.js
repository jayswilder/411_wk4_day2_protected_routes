import React from "react";
import cars from "../cars.json";
import { Container, Paper, Chip, Button } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "../App.css";


const Car = (props) => {
    const id = props.match.params.id;
    const car = cars.find(c => c.id == id);

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2 style={{
                    textTransform: "uppercase"
                }}>{car.Name}</h2>
                {Object.keys(car).map((key, i) => {
                    return <Chip label={`${key}: ${car[key]}`}></Chip>;
                })}

                <br></br>
                <br></br>

                <a href="/">
                    <Button className="backButton" variant="contained" color="primary">
                        <ArrowBackIosIcon fontSize="small" /> Back
                </Button>
                </a>

            </Paper>
        </Container>
    );
};

export default Car;