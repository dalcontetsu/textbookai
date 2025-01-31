import UserProfile from './UserProfile';

export default function Navbar() {
  const { user } = useAuth();
  
  return (
    <nav className="navbar">
      {/* Other navbar content */}
      {user ? <UserProfile /> : <AuthButtons />}
    </nav>
  );
}
