import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useLogin } from "../features/authentication/useLogin";
import { useSignup } from "../features/authentication/useSignup";

import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FormRow from "../components/FormRow";

const Layout = styled.main`
  min-height: 60vh;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 450px) {
    padding: 0 2rem;
    font-size: 1.4rem;
  }
`;

const Window = styled.div`
  display: grid;
  min-height: 70vh;
  gap: 1.6rem;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  input {
    padding: 1rem 4rem;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 1.6rem;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  select {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 1rem 4rem;
    color: var(--color-grey-500);
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

function Login() {
  // Handling which window to open
  const [loginForm, setLogin] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  function HandleLogin() {
    setLogin(!loginForm);
  }

  function HandleCreateAccount() {
    setCreateAccount(!createAccount);
  }

  function HandleCloseWindow() {
    if (login) {
      setLogin(!login);
    }

    if (createAccount) {
      setCreateAccount(!createAccount);
    }
  }

  // Handling logging in
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  // Handling signing up
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading: isSigningup } = useSignup();
  const navigate = useNavigate();

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => {
          reset();
          navigate("/");
        },
      }
    );
  }

  return (
    <div>
      <Header />
      {!loginForm && !createAccount && (
        <Layout>
          <div>
            <p>Already have an account?</p>
            <Button onClick={() => HandleLogin()}>Log in</Button>
          </div>
          <div>
            <p>If you don`t have an account, you can create one now!</p>
            <Button type="sign-in" onClick={() => HandleCreateAccount()}>
              Create an account
            </Button>
          </div>
        </Layout>
      )}
      {(loginForm || createAccount) && (
        <Window>
          {loginForm ? (
            <>
              <Heading>
                <h4>Log in to your account</h4>
                <IoCloseCircleOutline
                  className="icon"
                  onClick={() => HandleCloseWindow()}
                />
              </Heading>

              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  id="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your e-mail"
                  disabled={isLoading}
                />

                <input
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  disabled={isLoading}
                />

                <Button disabled={isLoading}>Log in</Button>
              </form>
            </>
          ) : (
            <>
              <Heading>
                <h4>Create an account!</h4>
                <IoCloseCircleOutline
                  className="icon"
                  onClick={() => HandleCloseWindow()}
                />
              </Heading>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label="Full Name" error={errors?.fullName?.message}>
                  <input
                    className="input"
                    type="name"
                    id="fullName"
                    {...register("fullName", {
                      required: "This field is required",
                    })}
                  />
                </FormRow>

                <FormRow
                  label="Enter your email"
                  error={errors?.email?.message}
                >
                  <input
                    className="input"
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provide a valid email address",
                      },
                    })}
                  />
                </FormRow>
                <FormRow
                  label="Enter your password"
                  error={errors?.password?.message}
                >
                  <input
                    className="input"
                    type="password"
                    id="password"
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password needs to be at least 8 characters",
                      },
                    })}
                  />
                </FormRow>
                <FormRow
                  label="Enter password again"
                  error={errors?.passwordConfirm?.message}
                >
                  <input
                    className="input"
                    type="password"
                    id="passwordConfirm"
                    {...register("passwordConfirm", {
                      required: "This field is required",
                      validate: (value) =>
                        value === getValues().password ||
                        "Passwords need to match",
                    })}
                  />
                </FormRow>
                <Button disabled={isSigningup}>Create your account</Button>
              </form>
            </>
          )}
        </Window>
      )}

      <Footer />
    </div>
  );
}

export default Login;
