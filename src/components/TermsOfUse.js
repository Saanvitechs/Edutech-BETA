import React, { useEffect } from 'react';
import './TermsOfUse.css';

const TermsOfUse = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-container">
      <h1>Terms of Use</h1>
      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using this Site in any way, including using any Services, downloading Materials or merely browsing the Site (capitalized terms defined below), you agree to and are bound by the terms and conditions set forth in this document and any changes thereto that “TREx”. (referred to hereinafter as "The Company") may publish from time to time (collectively, the "Terms of Use").​ If you do not agree to all of the terms and conditions contained in the Terms of Use, do not access or use this Site.
      </p>
      <p>
        The company may change the Terms of Use and other guidelines and rules posted on the Site from time to time at its sole discretion. Your continued access or use of the Site, or any Materials or Services, constitutes your acceptance of the changes.​Your access and use of the Site, Materials and Services will be subject to the most current version of the Terms of Use, rules and guidelines posted on the Site at the time of such use. Please regularly check the "Terms of Use" link on the ​home page​to view the then-current terms.
      </p>
      <p>
        If you breach any of the Terms of Use, your authorization to access or use this Site, Services and Materials automatically terminates, and any Materials downloaded or printed from the Site in violation of the Terms of Use must be immediately destroyed.
      </p>
      <h2>Representations and Warranties</h2>
      <p>
        You represent and warrant that:
        <ul>
          <li>All of the information provided by you to the company to participate in the Services is correct and current and</li>
          <li>You have all necessary right, power and authority to enter into this Agreement and to perform the acts required of you hereunder.</li>
        </ul>
      </p>
      <h2>Personal Information and Privacy</h2>
      <p>
        The company will use and protect your data in accordance with our ​Privacy Policy,​ the contents of which are incorporated by reference into the Terms of Use. Please be aware that your browser must be enabled to accept cookies in order for you to use certain Materials and Services.
      </p>
      <h2>Registration</h2>
      <p>
        If you are required to establish an account in connection with a particular Service or Material, you must complete the designated registration process for such Service or Material. All required registration information provided must be current, complete and accurate and kept up to date on a prompt, timely basis. If required, you must also choose a username and password for such account. It is your sole responsibility to keep your user name/password combination and other sensitive information confidential. If you become aware of any unauthorized use of your account or any other breach of security, you shall notify the company immediately.
      </p>
      <h2>Site, Materials, Services</h2>
      <p>
        The company makes this Web site and the Materials and Services, available for your access and use subject to the Terms of Use.
      </p>
      <p>
        "Materials" means all information, data, documents (e.g. pdf files, datasheets, FAQs, etc.), communications, downloads, files, text, images, photographs, graphics, videos, webcasts, publications, content, tools, resources, software, code, problems, articles, write-ups, questions, solutions, programs and products made available or enabled via the Site by the company or users of this Site.
      </p>
      <p>
        "Services" means all services and resources offered or enabled via the Site by the company and users of this Site, including some or all of downloads and download areas, product and other information services and communications services such as bulletin boards, discussion forums, chat areas, communities, e-mail, newsgroups, and other message or communication facilities designed to enable you to communicate with others (collectively, "Communications Venues"). All Materials provided by the company are referred to collectively as "the company Materials". All user-supplied Materials are referred to collectively as "User Materials".
      </p>
      <p>
        The company Materials and User Materials may have different restrictions and conditions associated with them under the Terms of Use and other guidelines and rules posted via the Site.
      </p>
      {/* Continue with the rest of the content similarly */}
    </div>
  );
};

export default TermsOfUse;
