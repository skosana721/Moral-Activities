import React from "react";
import Students from "./Students";
import { useSelector } from "react-redux";

function StudentsList() {
  const form = useSelector((state) => state.form.formInfo);
  return (
    <div className="studentsList">{form.length === 0 ? <Students /> : []}</div>
  );
}

export default StudentsList;
