import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";




import { login } from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [loginMutation, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await loginMutation({
        variables: { ...formState },
      });

      login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="">
        <div className="card">
          <h4 className="form-header">Log in</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="Your username"
                    name="username"
                    type="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-inputs-container">
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="ButtonContainer">
                  <button
                    className="btn-wide btn-primary login"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
                <Link className="lessImportantLink" to="/signup">
                  Sign Up
                </Link>
              </form>
            )}

            {error && <div className="">Login Error!</div>}
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center mt-5">

      <a href="https://www.facebook.com">
          <FaFacebook className="icon-social" />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagramSquare className="icon-social" />
        </a>
        <a href="https://github.com">
          <FaGithub className="icon-social" />
        </a>
        <a href="https://www.linkedin.com">
          <FaLinkedin className="icon-social" />
        </a>

      </div>

    </main>
  );
};

export default Login;
