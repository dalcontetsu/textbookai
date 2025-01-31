import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function SignupForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const { signup } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    // Sanitize name input to allow only letters, spaces, and basic punctuation
    if (name === 'name') {
      const sanitizedValue = value.replace(/[^a-zA-Z\s'-]/g, '')
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Validate name format
    if (formData.name.trim().length < 2) {
      setError('Name must be at least 2 characters long')
      return
    }

    const result = await signup(formData.name, formData.email, formData.password)
    if (result.success) {
      onSuccess()
    } else {
      setError(result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Create Account</h2>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          minLength={2}
          pattern="[A-Za-z\s'-]+"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  )
}