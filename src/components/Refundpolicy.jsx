import "./RefundPolicy.css";

function RefundPolicy() {
  return (
    <section className="refund-policy">
      <div className="refund-container">
        <h1>रिफंड एवं कैंसलेशन पॉलिसी</h1>

        <p className="refund-intro">
          शोभनम प्लेटफॉर्म के माध्यम से की गई बुकिंग के लिए
          निम्नलिखित रिफंड और कैंसलेशन नियम लागू होंगे।
        </p>

        <div className="refund-card">
          <h2>1. कार्यक्रम रद्द होने पर</h2>
          <p>
            यदि कार्यक्रम रद्द होता है, तो ग्राहक को किए गए
            भुगतान का 100% रिफंड किया जाएगा।
          </p>
        </div>

        <div className="refund-card">
          <h2>2. कार्यक्रम समय में बदलाव</h2>
          <p>
            यदि कार्यक्रम के समय में बदलाव होता है,
            तो ग्राहक को रिफंड या adjustment का विकल्प दिया जाएगा।
          </p>
        </div>

        <div className="refund-card">
          <h2>3. ग्राहक द्वारा रद्द करना</h2>
          <ul>
            <li>7 दिन पहले: 95% रिफंड</li>
            <li>3-7 दिन पहले: 50% रिफंड</li>
            <li>3 दिन से कम: कोई रिफंड नहीं</li>
          </ul>
        </div>

        <div className="refund-card">
          <h2>4. शोभनम द्वारा रद्द करना</h2>
          <p>
            यदि शोभनम ऐप कार्यक्रम रद्द करता है,
            तो ग्राहक को पूरा भुगतान वापस किया जाएगा।
          </p>
        </div>

        <div className="refund-card">
          <h2>5. रिफंड प्रक्रिया</h2>
          <p>
            रिफंड प्रक्रिया 7-10 कार्य दिवसों के भीतर पूरी की जाएगी।
          </p>
        </div>

        <div className="refund-card">
          <h2>6. रिफंड का तरीका</h2>
          <p>
            रिफंड उसी payment method में किया जाएगा
            जिससे ग्राहक ने भुगतान किया था।
          </p>
        </div>
      </div>
    </section>
  );
}

export default RefundPolicy;