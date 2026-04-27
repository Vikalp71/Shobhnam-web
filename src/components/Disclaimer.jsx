import "./Disclaimer.css";

function Disclaimer() {
  return (
    <section className="disclaimer">
      <div className="disclaimer-container">
        <h1>शोभनम ऐप - अस्वीकरण / Disclaimer</h1>

        <p className="disclaimer-intro">
          शोभनम ऐप केवल एक प्लेटफॉर्म है जो उपयोगकर्ताओं को सत्यापित
          कलाकारों और सेवा प्रदाताओं से जोड़ता है।
        </p>

        <div className="disclaimer-card">
          <h2>1. सेवा की प्रकृति</h2>
          <p>
            शोभनम स्वयं कोई कार्यक्रम आयोजित नहीं करता। सभी बुकिंग
            उपयोगकर्ता और कलाकार के बीच सीधा अनुबंध है।
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>2. जानकारी की सटीकता</h2>
          <p>
            कलाकारों द्वारा दी गई प्रोफाइल, रेटिंग और फोटो की सत्यता हेतु
            उचित प्रयास किए जाते हैं, लेकिन पूर्ण गारंटी नहीं दी जाती।
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>3. कार्यक्रम रद्द होना</h2>
          <p>
            अंतिम समय पर cancellation की स्थिति में refund policy लागू होगी।
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>4. तकनीकी समस्या</h2>
          <p>
            सर्वर डाउन, ऐप bugs या payment gateway issues हेतु शोभनम
            प्रत्यक्ष रूप से जिम्मेदार नहीं होगा।
          </p>
        </div>

        <div className="disclaimer-card">
          <h2>5. बाहरी लिंक</h2>
          <p>
            Third-party links/content के लिए शोभनम जिम्मेदार नहीं है।
          </p>
        </div>

        <div className="final-note">
          शोभनम ऐप का उपयोग करके आप इन शर्तों से सहमत होते हैं।
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;