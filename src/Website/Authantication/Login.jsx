import {useState,useEffect,React}from 'react';
import {Link,useNavigate} from 'react-router-dom';
import AuthUser from './AuthUser'
const Login = () => {
  const { http, settoken, token } = AuthUser();
  const [btnDiseble, setDisebale] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate, token]);
  
  const [Login, SetLogin] = useState({email: '',password: '' });

  const OninputChange = (e) => {
    SetLogin({ ...Login, [e.target.name]: e.target.value });
  }
  


  const onSubmit=(e) => {
  e.preventDefault();
 

    http.post("/user/login", Login)
      .then((res) => {
        if (res.data.token) {
        console.log(res.data);

          settoken(res.data.user_data, res.data.token);
           navigate('/');
        } else {
          // notify(res.data.message);
        }
        setDisebale(0);
      })
      .catch((error) => {
        // notify("The provided credentials are invalid");
        setDisebale(0);
      });
};
  return (
    <section className="user-form-part">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
            <div className="user-form-card text-center">
              <div className="user-form-logo">
                <a href="/">
                  <img src="https://vsmart.ajspire.com/images/logo1.png" alt="logo" />
                </a>
              </div>
              <div className="user-form-title">
                <h2>Welcome To VS Mart</h2>
                <p>Use your credentials to access</p>
              </div>
              <div className="user-form-group">
                <form action="/login" method="POST" className="user-form">
                  <input type="hidden" name="_token" defaultValue="wNSZDKezIt5KibgfuTUkMovnSKrrkWA66v3wBcrz" />
                  <div className="form-group">
                    <input name="email" type="text" className="form-control" placeholder="Enter your User Id | Mobile Numbar | Email Id " onChange={(e)=>OninputChange(e)} />
                    <span className="text-danger">The email field is required.</span>
                  </div>
                  <div className="form-group">
                    <input name="password" type="password" className="form-control" placeholder="Enter your password"onChange={(e)=>OninputChange(e)}  />
                    <span className="text-danger">The password field is required.</span>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" id="check" />
                    <label className="form-check-label" htmlFor="check">Remember Me</label>
                  </div>
                  <div className="form-button">
                  {/* <button
  type="submit"
  value="Login"
  to="/register"
  style={{ width: "100px", backgroundColor: "green" }}
>
  <h3>Login</h3>
</button> */}

<button class="glow-on-hover" type="submit" onClick={(e)=>onSubmit(e)}>Login</button>

                    {/* <p>Forgot your password?<a href="/forgot-password">reset here</a></p> */}
                  </div>
                </form>
              </div>
            </div>
            <div className="user-form-remind">
              <p>Don't have an account?<Link to="/register"><a >Register here</a>
              </Link></p>
            </div>
            {/* <div className="user-form-footer">
              <p>V S Mart | © Copyright 2022 by
                <a target="blank" href="/">VS Mart</a> All Rights Reserved
              </p><br />
              <p>Designed by
                <a target="blank" href="https://www.ajspire.com">Ajspire Technologies Pvt. Ltd</a>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;



