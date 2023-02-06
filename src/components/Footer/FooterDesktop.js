import React from "react";

const FooterDesktop = () => {
  return (
    <div className="footer-container-desktop">
      <div className="footer-container-item-desktop">
        <div className="footer-container-list-item-desktop">
          <h2 className="footer-container-title-desktop">სამუშაო საათები</h2>
          <ul className="footer-container-list-item-desktop">
            <li className="footer-container-list-i-desktop">
              ორშაბათი - პარასკევი : 10:00 - 18:00
            </li>
            <li className="footer-container-list-i-desktop">
              {`(+995) 555 12 34 56`}
            </li>
            <li className="footer-container-list-i-desktop">
              info@brchospital.ge
            </li>
          </ul>
        </div>
        <div className="footer-container-list-item-desktop">
          <h2 className="footer-container-title-desktop">მისამართი</h2>
          <ul className="footer-container-list-item-desktop">
            <li className="footer-container-list-i-desktop">
              ბათუმი, ალექსანდრე პუშკინის N4
            </li>
            <li className="footer-container-list-i-desktop">
              ბათუმი, ტბელ-აბუსერიძის 164
            </li>
          </ul>
          <div className="footer-container-map-desktop">
            <iframe
              className="footer-container-iframe-desktop"
              title="BRCH location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1448.4249694779264!2d41.624447199013616!3d41.63988788008041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067860c51c70f13%3A0xeed4033fce905cfa!2sBatumi%20Republican%20Clinical%20Hospital!5e0!3m2!1sen!2sge!4v1674036174308!5m2!1sen!2sge"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="footer-container-horizonal" />
      <h5 className="footer-container-text-desktop">
        &#169; {new Date().getFullYear()} Copyright: crafted with {`❤️`}{" "}
        by&nbsp;&nbsp;
        <a
          className="footer-container-text-link-desktop"
          href="https://www.linkedin.com/in/khojava/"
        >
          {" "}
          Dato Khojava
        </a>
      </h5>
    </div>
  );
};

export default FooterDesktop;
