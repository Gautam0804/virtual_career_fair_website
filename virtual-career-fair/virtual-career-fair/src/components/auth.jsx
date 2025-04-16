import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Login/SignUp toggle

  const handleAuth = async () => {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in!");
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-3">{isLogin ? "Login" : "Sign Up"}</h2>
      <input className="border p-2 mb-2 w-full" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2 w-full" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleAuth} className="bg-blue-600 text-white px-4 py-2 rounded">{isLogin ? "Login" : "Sign Up"}</button>
      <p className="mt-3 text-sm cursor-pointer text-blue-500" onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}</p>
    </div>
  );
}
