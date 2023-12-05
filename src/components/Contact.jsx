function Contact() {
  return (
    <>
      <>
        <div id="contact" className="contact">
          <div className="breadrum">Contact</div>
          <h1 className="title">
            Let Work <span>Together!</span>
          </h1>
          <h2 className="email-contact">Email: kien3710@gmail.com</h2>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-input">
                <label>
                  FULL NAME <span>*</span>
                </label>
                <input type="text" placeholder="Your Full Name" />
              </div>
              <div className="contact-input">
                <label>
                  PHONE <span>*</span>
                </label>
                <input type="text" placeholder="Your number phone" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-input">
                <label>
                  Email <span>*</span>
                </label>
                <input type="text" placeholder="Your email adress" />
              </div>
              <div className="contact-input">
                <label>
                  Content <span>*</span>
                </label>
                <input type="text" placeholder="Your content" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="send-btn">
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Contact;
