import React from "react";
import { Button } from "reactstrap";
function ConfirmationForm() {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="Enter name" />
        <br />
        <input type="text" name="lastName" placeholder="Enter last name" />
        <br />
        <input
          type="number"
          name="contact"
          id=""
          placeholder="Enter contact details"
        />
        <br />
        <input type="text" name="location" placeholder="Enter location" />
        <br />
        <select name="" id="">
          <option value="">Select payment</option>
          <option value="">Cash</option>
          <option value="">Credit</option>
        </select>
        <br />
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ConfirmationForm;
