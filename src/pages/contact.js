export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Get in Touch</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
