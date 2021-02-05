import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<[User]>();
  const inputRef = useRef<HTMLInputElement>(null);

  async function loadData() {
    const response = await fetch("https://api.github.com/users/danielbrito");
    const data = await response.json();

    setUser(data);
  }

  useEffect(() => {
    loadData();
  }, []);

  const names = useMemo(
    () => users?.map((user) => user.name).join(", ") || "",
    [users]
  );

  const greeting = useCallback(
    (user: User) => alert(`Hello, ${user.name}`),
    []
  );

  inputRef.current?.focus();

  return (
    <div className="App">
      <h1>{user?.name}</h1>
      <form>
        <label>Idade: </label>
        <input type="text" ref={inputRef} />
      </form>
    </div>
  );
};

export default App;
