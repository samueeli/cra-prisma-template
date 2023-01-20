import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';

type User = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const usersRes = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await usersRes.json();
      setUsers(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <HomePage />
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
