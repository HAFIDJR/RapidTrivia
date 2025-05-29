import { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../../service/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password tidak sama");
      return;
    }

    try {
      const result = await registerUser({
        email,
        password,
        name,
        role: "ADMIN",
      });

      if (result.success && result.responseObject) {
        localStorage.setItem("token", result.responseObject.token);
        localStorage.setItem(
          "user",
          JSON.stringify(result.responseObject.user)
        );
        navigate("/login");
      } else {
        alert(result.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Gagal melakukan registrasi. Coba lagi nanti.");
    }
  };

  return (
    <section id="signup" className="flex w-full min-h-[832px] relative">
      <nav className="flex items-center px-[50px] pt-[30px] w-full absolute top-0">
        <div className="flex items-center"></div>
        <div className="flex items-center justify-end w-full">
          <ul className="flex items-center gap-[30px]">
            <li className="h-[52px] flex items-center">
              <a
                href="/login"
                className="font-semibold text-white p-[14px_30px] bg-[#0A090B] rounded-full text-center"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="left-side min-h-screen flex flex-col w-full pb-[30px] pt-[82px]">
        <div className="h-full w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-[450px] p-4 bg-white rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-center">
              Create Your Account
            </h2>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Hafid Kurniawan"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6436F1] placeholder:text-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. hafid@example.com"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6436F1] placeholder:text-gray-400"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter a secure password"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6436F1] placeholder:text-gray-400"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirmPassword"
                className="font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat your password"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6436F1] placeholder:text-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3 bg-[#6436F1] hover:bg-[#502dd0] text-white font-bold rounded-lg transition duration-300"
            >
              Create My Account
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
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="logo-container animate-[slide_15s_linear_infinite] group-hover/slider:pause-animate flex gap-10 pl-10 items-center flex-nowrap"
                >
                  {[
                    "logo-51.svg",
                    "logo-51-1.svg",
                    "logo-52.svg",
                    "logo-52-1.svg",
                    "logo-51.svg",
                  ].map((file, i) => (
                    <div key={i} className="w-fit flex shrink-0">
                      <img src={`assets/images/logo/${file}`} alt="logo" />
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
