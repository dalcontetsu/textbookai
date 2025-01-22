export default function Careers() {
  const jobListings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our core team building the next generation of AI-powered learning tools. Help develop our advanced NLP engine and machine learning systems.",
      requirements: ["5+ years ML/AI experience", "Strong Python skills", "Experience with LLMs"]
    }
  ]

  return (
    <div className="careers-page">
      <h1>Join Our Mission</h1>
      <p className="careers-intro">Help us transform education through AI-powered learning technology</p>
      
      <div className="positions-list">
        <h2>Open Positions</h2>
        
        {jobListings.map(job => (
          <a href={`/careers/${job.id}`} key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className="job-type">{job.type}</span>
            </div>
            
            <div className="job-details">
              <span className="department">{job.department}</span>
              <span className="location">{job.location}</span>
            </div>
            
            <p className="job-description">{job.description}</p>
            
            <div className="key-requirements">
              {job.requirements.map((req, index) => (
                <span key={index} className="requirement-tag">{req}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}