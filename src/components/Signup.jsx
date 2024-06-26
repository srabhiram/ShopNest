import { signin, signup } from "../Authentication/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgdesign from "../assets/bg-design2.jpeg";
import { Spinner } from "./Spinner";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isLogin, setLogin] = useState(true);
  const [error, setError] = useState("");
  const [name, setNAme] = useState("");

  const [load, setload] = useState(false);
  const navigate = useNavigate();

  const handlesignin = () => {
    if (email && password && isLogin) {
      setload(true);
      setTimeout(() => {
        setload(false);
      }, 1600);
    }
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    handlesignin();

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
      <div className="bg-togray h-screen">
        <div className="relative h-screen max-sm:hidden  max-md:hidden">
          <img src={bgdesign} alt="" className=" h-full w-full relative " />
          <p className="absolute top-[13%] inset-1/2 px-9 font-Madimi text-[3rem] hover:text-white">
            ShopNest
          </p>
        </div>
        <div className="flex flex-col">
          <p className="lg:hidden font-Madimi text-[3rem] text-center py-8 text-stone-900 hover:text-white ">
            ShopNest
          </p>
          <div className=" max-sm:bg-togray max-md:bg-frgray  md:absolute md:right-1/4 md:top-[25%] flex items-center justify-center">
            <div className=" bg-white/30   grid grid-cols-1  rounded-xl shadow-2xl gap-2 items-start w-[23rem]   p-7">
              <div className="">
                <form onSubmit={handlesubmit} className="">
                  <div>
                    {!isLogin && (
                      <>
                        <label
                          htmlFor="name"
                          className="block px-1 w-full font-medium pb-1 text-lg  "
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="border-2 w-full border-gray-700 placeholder-gray-500 p-3 rounded-lg mb-1"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setNAme(e.target.value)}
                          required
                        />
                      </>
                    )}
                    <label
                      htmlFor="EMail"
                      className="block px-1 w-full font-medium pb-1 text-lg  "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-2 w-full border-gray-700 placeholder-gray-500 p-3 rounded-lg mb-1"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="EMail"
                      className="block px-1 w-full font-medium pb-1 text-lg "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-2 w-full border-gray-700 placeholder-gray-500 p-3 rounded-lg mb-1 "
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {!isLogin && (
                    <>
                      <label
                        htmlFor="EMail"
                        className="block px-1 w-full font-medium pb-1 text-lg "
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="border-2 w-full border-gray-700 placeholder-gray-500 p-3 rounded-lg mb-1"
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                        required
                      />
                    </>
                  )}
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <button
                    type="submit"
                    className={
                      load
                        ? "bg-black/40  text-white mt-2 ml-1 px-3 py-2 rounded-md active:scale-95"
                        : "bg-black text-white px-3 mt-2 ml-1 py-2 rounded-md hover:bg-black hover:transition-all hover:ease-in-out hover:duration-150 active:scale-95 active:duration-300 active:bg-black/30 "
                    }
                    disabled={load}
                  >
                    {" "}
                    <div className="flex gap-2">
                      <Spinner load={load} />
                      {isLogin ? "Signin" : "Sign Up"}
                    </div>
                  </button>
                </form>
                <p className="mt-2">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <button
                    className="hover:font-medium"
                    onClick={() => setLogin(!isLogin)}
                  >
                    {isLogin ? "Sign Up" : "Login"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
