import { useState } from "react";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState([]);
  function submitForm() {
    //if any variable is missing, show Error
    //""/null/undefined ----> falsy values
    const validationErrors = [];
    if (!phone || phone.length !== 10) {
      validationErrors.push("Phone Number is not Valid");
    }
    if (!password) {
      validationErrors.push("Password is missing");
    }
    if (!gender) {
      validationErrors.push("Gender is Missing");
    }
    setErrors(validationErrors);
  }
  return (
    <>
      <h1>Login Form</h1>
      {errors.length > 0 ? (
        <ul>
          {errors.map((err) => (
            <li style={{ color: "red" }}>{err}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          placeholder="Phone"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <select
          onChange={(event) => {
            setGender(event.target.value);
          }}
          value={gender}
        >
          <option value="">---</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button
          onClick={() => {
            submitForm();
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
