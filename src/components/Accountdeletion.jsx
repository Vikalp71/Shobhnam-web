import "./Accountdeletion.css";

function Accountdeletion() {
  return (
    <section className="account-deletion">
      <div className="account-container">
        <h1>Account Deletion – Shobhnam</h1>

        <p className="intro">
          Users can request deletion of their Shobhnam account and associated
          data by following the steps below.
        </p>

        <div className="delete-card">
          <h2>How to request account deletion</h2>
          <ul>
            <li>Send an email to: <strong>shobhnam412@gmail.com</strong></li>
            <li>Use subject: <strong>"Account Deletion Request"</strong></li>
            <li>Include your registered phone number</li>
          </ul>
        </div>

        <div className="delete-card">
          <h2>What data will be deleted</h2>
          <ul>
            <li>Your account information (name, phone number, email)</li>
            <li>Profile details</li>
            <li>Booking history (except where required by law)</li>
          </ul>
        </div>

        <div className="delete-card">
          <h2>Data Retention</h2>
          <p>
            Some transaction records may be retained for legal and compliance
            purposes (up to 7 years).
          </p>
        </div>

        <div className="delete-card">
          <h2>Processing Time</h2>
          <p>Your request will be processed within 3–7 working days.</p>
        </div>

        <div className="delete-card">
          <h2>Contact</h2>
          <p>Email: shobhnam412@gmail.com</p>
            <p>Phone: +91 9559508108</p>
        </div>
      </div>
    </section>
  );
}

export default Accountdeletion;