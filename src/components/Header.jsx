import { useEffect, useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";
import { UserAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@chakra-ui/react";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { HashLink } from "react-router-hash-link";

function Header() {
  const navigate = useNavigate();

  const [menuToggle, setMenuToggle] = useState(false);
  const handleToggle = () => setMenuToggle(!menuToggle);

  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    handleToggle();
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then((res) => {
        console.log(res);
        navigate("/dashboard");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    handleToggle();
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="bg-white bg-opacity-95 fixed font-medium z-10 w-full p-2 flex flex-row items-center justify-between px-4 md:px-12">
      <p
        className="text-3xl flex items-center md:text-5xl text-orange-400 md:w-full cursor-pointer"
        onClick={() => navigate("/")}
      >
        <IoFastFoodSharp />{" "}
        <i className="text-green-400 text-2xl md:text-4xl md:flex-1 md:text-center md:w-full">
          J<span className="text-orange-400">i</span>L
        </i>
      </p>
      <div className="hidden md:flex flex-row items-center justify-center w-max flex-1 whitespace-nowrap space-x-12">
        <p
          className="text-sm text-black hover:text-orange-400 cursor-pointer"
          onClick={() => navigate("/#about")}
        >
          About
        </p>
        <p
          className="text-sm text-black hover:text-orange-400 cursor-pointer"
          onClick={() => navigate("/#blog")}
        >
          Blog
        </p>
        {!loading && user && (
          <div>
            <Avatar name={user.displayName} src={user.photoURL ?? ""} />
          </div>
        )}
        {!loading && (
          <p
            onClick={user ? handleSignOut : handleSignIn}
            className={`text-sm text-white ${
              user
                ? "bg-red-500 hover:bg-red-400 active:bg-red-300"
                : "bg-green-500 hover:bg-green-400 active:bg-green-300"
            }  p-2 rounded-lg cursor-pointer`}
          >
            {user ? "Sign Out" : "Get Started"}
          </p>
        )}
      </div>
      <div className="flex items-center justify-center md:hidden">
        <RiMenu5Fill
          className="text-green-600 active:text-white text-2xl cursor pointer"
          onClick={handleToggle}
        />
      </div>

      {menuToggle && (
        <div className="md:hidden absolute top-0 left-0 z-50 w-screen min-h-screen flex items-center justify-center">
          <div
            onClick={handleToggle}
            className="absolute backdrop-blur w-screen h-screen"
          />
          <div className="z-50 flex flex-col items-center justify-center space-y-12 my-4 bg-white p-12 rounded-2xl">
            <HashLink
              className="text-sm text-black hover:text-orange-400 cursor-pointer"
              to={"/#about"}
            >
              About
            </HashLink>
            <HashLink
              className="text-sm text-black hover:text-orange-400 cursor-pointer"
              to={"/#blog"}
            >
              Blog
            </HashLink>
            <p
              className="text-green-400 text-base cursor-pointer font-medium"
              onClick={() => navigate("/#about")}
            >
              About
            </p>
            <p
              className="text-green-400 text-base cursor-pointer font-medium"
              onClick={() => navigate("/#blog")}
            >
              Blog
            </p>
            {!loading && (
              <p
                onClick={user ? handleSignOut : handleSignIn}
                className={`text-base cursor-pointer font-medium ${
                  user
                    ? "bg-red-500 hover:bg-red-400 active:bg-red-300"
                    : "bg-green-500 hover:bg-green-400 active:bg-green-300"
                } text-white p-2 rounded-lg`}
              >
                {user ? "Sign Out" : "Get Started"}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
