//import { Navigate, useState } from 'react-router-dom';
//export const Login = () => {
//  //  const navigate = useNavigate();
//  //  const handleSubmit = async values => {
//  //     const response = await fakeAPI.login(values);
//  //     if (response.success) {
//  //        navigate('/profile', { replace: true });
//  //     }
//  //  };

//  const [isLoginSuccess, setIsLoginSuccess] = useState(False);
//  const handleSubmit = async values => {
//    const response = await await fakeAPI.login(values);
//    setIsLoginSuccess(response.success);
//  };
//  if (isLoginSuccess) {
//    return <Navigate to="/profile" replace />;
//  }
//  return (
//    <div>
//      <h1>Login page</h1>
//      <LoginForm onSubmit={handleSubmit} />
//    </div>
//  );
//};
