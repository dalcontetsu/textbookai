import { useAuth } from '../context/AuthContext';

export default function UserProfile() {
  const { user, logout } = useAuth();
  
  return (
    <div className="profile-dropdown">
      <div className="user-profile">
        <img 
          src={user.avatar || '/default-avatar.png'} 
          alt={user.name} 
          className="user-avatar"
        />
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-email">{user.email}</span>
        </div>
      </div>
      
      <div className="dropdown-content">
        <a href="/profile" className="dropdown-item">My Profile</a>
        <a href="/settings" className="dropdown-item">Settings</a>
        <button onClick={logout} className="logout-btn">
          <span>Logout</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
