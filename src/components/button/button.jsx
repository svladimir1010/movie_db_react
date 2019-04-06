import React from "react";
import Button from "@material-ui/core/Button";
import "./button.css";

const Butoon = ({ decrement, increment, page }) => {
    return (
        <>
            <Button className="button prev" onClick={decrement} disabled={page <= 1}>
                Prev
            </Button>

            <Button className="button next" onClick={increment}>
                Next
            </Button>
        </>
    );
};

export default Butoon;
