import React from "react";
import Button from "@material-ui/core/Button";
import "./button.css";

const Butoon = ({ decrement, increment }) => {
    return (
        <>
            {/* <Button variant="contained" color="primary"  onClick={() => this.increment()} >Prev</Button> */}
            {/* <Button variant="contained" color="primary" onClick={() => this.decrement()} >Next</Button> */}

            <Button className="button prev" onClick={increment}>
                Prev
            </Button>

            <Button className="button next" onClick={decrement}>
                Next
            </Button>
        </>
    );
};

export default Butoon;
