import React, { useState } from "react";
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
const fields = signupFields;
let fieldsState = {};

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {
    axios
      .post("http://127.0.0.1:8000/signup/", {
        phone: signupState,
        password: signupState,
      })
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to sign up user");
        setIsLoading(false);
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {errorMessage && (
          <div role="alert">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Danger
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>{errorMessage}</p>
            </div>
          </div>
        )}
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction
          handleSubmit={handleSubmit}
          text="Signup"
          disabled={isLoading}
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
