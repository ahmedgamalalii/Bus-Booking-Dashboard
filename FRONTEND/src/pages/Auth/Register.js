import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { setAuthUser } from "../../helper/storage";
import { useNavigate } from 'react-router-dom';

 const Register =()=> {
    const navigate = useNavigate();
    const [register, setRegister] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    loading: false,
    err: [],
  });
  const RegisterFun = (e) => {
    e.preventDefault();
    setRegister({ ...register, loading: true, err: [] });
    axios.post("http://localhost:4000/auth/register", {
        email: register.email,
        password: register.password,
        name: register.name,
        phone: register.phone,
      })
      .then((resp) => {
        setRegister({ ...register, loading: false, err: [] });
        setAuthUser(resp.data);
        navigate("/");
      })
      .catch((errors) => {
        setRegister({
          ...register,
          loading: false,
          err: errors.response.data.errors,
        });
      });
  };
    return (
        <div className="text-center m-5-auto" onSubmit={RegisterFun}>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            {register.err.map((error, index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.msg}
        </Alert>
      ))}
            <form action="/register">
                <p>
                    <label>Name</label><br/>
                    <input type="text" name="first_name" required   value={register.name}
            onChange={(e) => setRegister({ ...register, name: e.target.value })} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required value={register.email}
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required value={register.password}
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }/>
                </p>
                <p>
                    <label>Phone Number</label><br/>
                    <input type="text" name="first_name" required  value={register.phone}
            onChange={(e) =>
              setRegister({ ...register, phone: e.target.value })
            }/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit"  disabled={register.loading === true}>Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
export default Register;