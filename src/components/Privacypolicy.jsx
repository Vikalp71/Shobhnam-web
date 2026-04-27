import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <div className="privacy-container">
        <h1>शोभनम ऐप गोपनीयता नीति</h1>
        <p className="effective-date">
          प्रभावी तिथि: <strong>14 अप्रैल 2026</strong>
        </p>

        <p className="intro">
          शोभनम ऐप आपकी गोपनीयता का सम्मान करता है। यह नीति बताती है कि
          हम आपका डेटा कैसे एकत्र, उपयोग और सुरक्षित रखते हैं।
        </p>

        <div className="policy-card">
          <h2>1. हम कौन-सा डेटा एकत्र करते हैं</h2>
          <ul>
            <li>खाता जानकारी: नाम, मोबाइल नंबर, ईमेल</li>
            <li>प्रोफ़ाइल विवरण: फोटो, पता, शहर</li>
            <li>बुकिंग विवरण: तारीख, स्थान, कलाकार पसंद</li>
            <li>भुगतान जानकारी: UPI ID, Transaction ID</li>
            <li>डिवाइस जानकारी और ऐप usage data</li>
          </ul>
        </div>

        <div className="policy-card">
          <h2>2. डेटा का उपयोग</h2>
          <ul>
            <li>बुकिंग कन्फर्म करने हेतु</li>
            <li>भुगतान प्रोसेस करने हेतु</li>
            <li>सुरक्षा और fraud रोकने हेतु</li>
            <li>ऐप experience बेहतर बनाने हेतु</li>
          </ul>
        </div>

        <div className="policy-card">
          <h2>3. डेटा साझाकरण</h2>
          <p>
            हम आपका डेटा बेचते नहीं हैं। केवल कलाकार, payment providers
            और कानूनी जरूरत होने पर साझा किया जाता है।
          </p>
        </div>

        <div className="policy-card">
          <h2>4. डेटा सुरक्षा</h2>
          <ul>
            <li>256-bit SSL Encryption</li>
            <li>भारत स्थित secure servers</li>
            <li>Regular security audits</li>
          </ul>
        </div>

        <div className="policy-card">
          <h2>5. आपके अधिकार</h2>
          <ul>
            <li>डेटा access करना</li>
            <li>गलत जानकारी सुधारना</li>
            <li>अकाउंट delete करना</li>
            <li>Marketing messages बंद करना</li>
          </ul>
        </div>

        <div className="policy-card">
          <h2>6. संपर्क करें</h2>
          <p>Email: shobhnam412@gmail.com</p>
          <p>Phone: +91 9559508108</p>
          <p>Address: Kalyanpur, Kanpur, Uttar Pradesh</p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;