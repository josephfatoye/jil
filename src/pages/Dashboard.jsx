import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/Auth";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="mt-20 min-h-sceen flex items-center">
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div className="break-words w-11/12">
            Welcome, {user.displayName} - you are logged in to the profile page -
            a protected route.
            <p>{JSON.stringify(user, null, 2)}</p>
        </div>
      ) : navigate('/')}
    </div>
  );
};

export default Dashboard;
