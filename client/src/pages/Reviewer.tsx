import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const Reviewer = () => {
  return (
    <main>
      <div>
        <Typography>To</Typography>
        <TextField />
      </div>
      <div>
        <Typography>Good</Typography>
        <TextField />
      </div>
      <div>
        <Typography>More</Typography>
        <TextField />
      </div>
      <Button>Submit</Button>
    </main>
  );
};

export default Reviewer;
