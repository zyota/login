export default function Profile(prop) {
  const { setIsLoggedIn } = prop;
  return (
    <div className="profile">
      <h1>ProfiLe</h1>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
    </div>
  );
}
