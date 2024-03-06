import { signin, signup } from "../Authentication/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Authentication/Firebase";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [name, setNAme] = useState("");
  console.log(name);
  console.log(auth.currentUser);

  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      setError(""); // Clear any previous errors
      if (!isValidPassword(password)) {
        setError(
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character."
        );
        return;
      }

      if (isLogin) {
        const result = await signin(email, password, name);
        if (result) {
          navigate("/home");
        }
        // Handle successful login
      } else {
        if (password !== confirmPassword) {
          setError("Password donot match");
          throw new Error("Passwords do not match");
        }

        const result = await signup(email, password, name);
        if (result) {
          navigate("/home");
        }

        // Handle successful signup
      }
    } catch (error) {
      setError(error.message);
      console.error("Authentication error:", error);
    }
  };

  return (
    <>
      <h2>{isLogin ? "" : ""}</h2>
      <div className="bg-black/70 flex items-center h-screen justify-center">
        <div className=" bg-white  grid grid-cols-1  rounded-xl shadow-2xl gap-3 items-start w-[23rem] h-max border p-7">
          <div className="">
            <form onSubmit={handlesubmit} className="">
              <div>
                {!isLogin && (
                  <>
                    <label htmlFor="name" className="block p-1 w-full my-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border w-full border-gray-600 p-3"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setNAme(e.target.value)}
                      required
                    />
                  </>
                )}
                <label htmlFor="EMail" className="block p-1 w-full my-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border w-full border-gray-600 p-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="EMail" className="block p-1 w-full mt-2">
                  Password
                </label>
                <input
                  type="password"
                  className="border w-full border-gray-600 p-3 mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {!isLogin && (
                <>
                  <label htmlFor="EMail" className="block p-1 mt-2 w-full">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border w-full border-gray-600 p-3 mb-3"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    required
                  />
                </>
              )}
              {error && <p style={{ color: "red" }}>{error}</p>}
              <button
                type="submit"
                className="bg-black px-3 py-2 mb-2 text-white rounded-md"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button onClick={() => setLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
