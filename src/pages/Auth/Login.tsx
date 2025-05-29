import React, { useState } from "react";
import { loginUser } from "../../service/auth";
import { Navigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (localStorage.getItem("token")) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Contoh autentikasi
      const response = await loginUser({ email, password });

      if (!response.success) {
        throw new Error(response.message || "Login failed");
      }

      if (response.responseObject?.token) {
        localStorage.setItem("token", response.responseObject.token);
        localStorage.setItem(
          "user",
          JSON.stringify(response.responseObject.user)
        );
      }

      window.location.href = "/"; // Atau gunakan navigate()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section id="signup" className="flex w-full min-h-[832px]">
      <nav className="flex items-center px-[50px] pt-[30px] w-full absolute top-0">
        <div className="flex items-center" />
        <div className="flex items-center justify-end w-full">
          <ul className="flex items-center gap-[30px]">
            <li className="h-[52px] flex items-center">
              <a
                href="/register"
                className="font-semibold text-white p-[14px_30px] bg-[#0A090B] rounded-full text-center"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="left-side min-h-screen flex flex-col w-full pb-[30px] pt-[82px]">
        <div className="h-full w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[30px] w-[450px] shrink-0"
          >
            <h1 className="font-bold text-2xl leading-9">Sign In</h1>

            {error && <p className="text-red-500 font-medium">{error}</p>}

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Email Address</p>
              <div className="flex items-center w-full h-[52px] p-[14px_16px] rounded-full border border-[#EEEEEE] focus-within:border-2 focus-within:border-[#0A090B]">
                <div className="mr-[14px] w-6 h-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="assets/images/icons/sms.svg"
                    className="h-full w-full object-contain"
                    alt="icon"
                  />
                </div>
                <input
                  type="email"
                  className="font-semibold placeholder:text-[#7F8190] placeholder:font-normal w-full outline-none"
                  placeholder="Write your correct input here"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-semibold">Password</p>
              <div className="flex items-center w-full h-[52px] p-[14px_16px] rounded-full border border-[#EEEEEE] focus-within:border-2 focus-within:border-[#0A090B]">
                <div className="mr-[14px] w-6 h-6 flex items-center justify-center overflow-hidden">
                  <img
                    src="assets/images/icons/lock.svg"
                    className="h-full w-full object-contain"
                    alt="icon"
                  />
                </div>
                <input
                  type="password"
                  className="font-semibold placeholder:text-[#7F8190] placeholder:font-normal w-full outline-none"
                  placeholder="Write your correct input here"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[52px] p-[14px_30px] bg-[#6436F1] rounded-full font-bold text-white transition-all duration-300 hover:shadow-[0_4px_15px_0_#6436F14D] text-center"
            >
              Sign In to my Account
            </button>
          </form>
        </div>
      </div>

      <div className="right-side min-h-screen flex flex-col w-[650px] shrink-0 pb-[30px] pt-[82px] bg-[#6436F1]">
        <div className="h-full w-full flex flex-col items-center justify-center pt-[66px] gap-[100px]">
          <div className="w-[500px] h-[360px] flex shrink-0 overflow-hidden">
            <img
              src="assets/images/logo/Trivia.svg"
              className="w-full h-full object-contain"
              alt="banner"
            />
          </div>

          <div className="logos w-full overflow-hidden">
            <div className="group/slider flex flex-nowrap w-max items-center">
              {[1, 2].map((group) => (
                <div
                  key={group}
                  className="logo-container animate-[slide_15s_linear_infinite] group-hover/slider:pause-animate flex gap-10 pl-10 items-center flex-nowrap"
                >
                  {[
                    "logo-51.svg",
                    "logo-51-1.svg",
                    "logo-52.svg",
                    "logo-52-1.svg",
                    "logo-51.svg",
                  ].map((logo, index) => (
                    <div key={index} className="w-fit flex shrink-0">
                      <img src={`assets/images/logo/${logo}`} alt="logo" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
