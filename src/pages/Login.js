import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../store/actions/userActions";

export default function Login(props) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [usererror, setusererror] = useState("");
  const [passerror, setpasserror] = useState("");


  const validate = () =>{
    const errors ={};
    if(email === "")
      errors.email='Email alanı boş bırakılamaz';
    if(password === "")
    errors.password = "Şifre Alanı Boş bırakılamaz";  
    return Object.keys(errors).length === 0 ? null : errors;
  }

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const errors = validate();
    if(errors){
      setusererror(errors.email);
      setpasserror(errors.password);
    }else{
      dispatch(signin(email, password));
      setusererror('');
      setpasserror('');
    }
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, props.history, redirect]);
  return (
    <div className="bg-gray-500 h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold text-white text-center">Login</h1>
      </header>
      <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 shadow-lg rounded-lg">
        <section>
          <p className="font-bold text-2xl">Welcome to Login</p>
          <p className="text-gray-500 pt-2">Giriş yap</p>
        </section>
        <section className="mt-10">
          <form className="flex flex-col" onSubmit={submitHandler}>
            <div className="mb-6 pt-3 bg-gray-200">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2 ml-2"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full rounded bg-gray-200 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500"
                type="email"
                id="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setemail(e.target.value)}
              />
              <div className='text-sm font-bold text-red-600'>{usererror}</div>
            </div>
            <div className="mb-6 pt-3 bg-gray-200">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2 ml-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full rounded bg-gray-200 focus:outline-none border-b-4 border-gray-300 focus:border-gray-600 transition duration-500"
                type="password"
                id="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <div className='text-sm font-bold text-red-600'>{passerror}</div>
            </div>
            <button className="bg-purple-500 text-white hover:bg-purple-700 font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-700">
              Sıgn In
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
