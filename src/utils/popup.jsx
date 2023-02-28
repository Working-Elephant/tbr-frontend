import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./popup.css";
const PopupModal = () => {
  const check = localStorage.getItem("agreement") ? false : true;
  console.log(check, "tim");

  const setCheck = () => {
    localStorage.setItem("agreement", "accepted");
  };
  return (
    <Popup
      modal
      nested
      defaultOpen={check}
      closeOnDocumentClick={false}
      trigger={<button></button>}
      position="center center"
    >
      {(close) => (
        <div>
          <main class="wrap">
            <section class="container">
              <div class="container__heading">
                <h2>Terms & Conditions</h2>
              </div>
              <div class="container__content">
                <p>
                  The information contained on this Website , including
                  attachments and Intellectual Property is owned and/or
                  proprietary to Texas Bully Registry LLC/TRF and/or its
                  affiliates. The information transmitted herewith is intended
                  only for use by the individual or entity to which it is
                  addressed and is legally PRIVILEGED, CONFIDENTIAL, and exempt
                  from disclosure under applicable law. If the reader of this
                  message is not the intended recipient, you are hereby notified
                  that any review, retransmission, dissemination, distribution,
                  copying or other use of, or taking of any action in reliance
                  upon this information is strictly prohibited. If you have
                  received this communication in error, please contact the
                  sender immediately by replying to this e-mail message and
                  delete the message and any attachments from your computer and
                  all servers where it has been stored.
                  <p className="text-bold mb-3 mt-3"> Subject: disclaimmer </p>
                  The information contained in this E-mail, including
                  attachments, is confidential and/or proprietary to Kutsum Ent.
                  and/or its affiliates. The information transmitted herewith is
                  intended only for use by the individual or entity to which it
                  is addressed and is legally PRIVILEGED, CONFIDENTIAL, and
                  exempt from disclosure under applicable law. If the reader of
                  this message is not the intended recipient, you are hereby
                  notified that any review, retransmission, dissemination,
                  distribution, copying or other use of, or taking of any action
                  in reliance upon this information is strictly prohibited. If
                  you have received this communication in error, please contact
                  the sender immediately by replying to this e-mail message and
                  delete the message and any attachments from your computer and
                  all servers where it has been stored.
                  <p className="mb-3 mt-3"> WEBSITE DISCLAIMER </p>
                  The information provided by WEBDOGG (“we,” “us”, or “our”) on
                  https://webdogg.com (the “Site”) is for general informational
                  purposes only. All information on the Site is provided in good
                  faith, however we make no representation or warranty of any
                  kind, express or implied, regarding the accuracy, adequacy,
                  validity, reliability, availability or completeness of any
                  information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE
                  ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND
                  INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY
                  INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND
                  YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR
                  OWN RISK.
                  <p className="mt-3 mb-3 text-bold">
                    EXTERNAL LINKS DISCLAIMER
                  </p>
                  The Site may contain (or you may be sent through the Site)
                  links to other websites or content belonging to or originating
                  from third parties or links to websites and features in
                  banners or other advertising. Such external links are not
                  investigated, monitored, or checked for accuracy, adequacy,
                  validity, reliability, availability or completeness by us. WE
                  DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
                  FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY
                  THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR
                  FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT
                  BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
                  TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS
                  OR SERVICES.
                  <p className="mt-3 mb-3 text-bold">PROFESSIONAL DISCLAIMER</p>
                  The Site cannot and does not contain dog
                  training/health/breeding advice. The dog
                  training/health/breeding information is provided for general
                  informational and educational purposes only and is not a
                  substitute for professional advice. Accordingly, before taking
                  any actions based upon such information, we encourage you to
                  consult with the appropriate professionals. We do not provide
                  any kind of dog training/health/breeding advice. THE USE OR
                  RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY
                  AT YOUR OWN RISK.
                  <p className="mt-3 mb-3 text-bold">TESTIMONIALS DISCLAIMER</p>
                  The Site may contain testimonials by users of our products
                  and/or services. These testimonials reflect the real-life
                  experiences and opinions of such users. However, the
                  experiences are personal to those particular users, and may
                  not necessarily be representative of all users of our products
                  and/or services. We do not claim, and you should not assume,
                  that all users will have the same experiences. YOUR INDIVIDUAL
                  RESULTS MAY VARY. The testimonials on the Site are submitted
                  in various forms such as text, audio and/or video, and are
                  reviewed by us before being posted. They appear on the Site
                  verbatim as given by the users, except for the correction of
                  grammar or typing errors. Some testimonials may have been
                  shortened for the sake of brevity where the full testimonial
                  contained extraneous information not relevant to the general
                  public. The views and opinions contained in the testimonials
                  belong solely to the individual user and do not reflect our
                  views and opinions. We are not affiliated with users who
                  provide testimonials, and users are not paid or otherwise
                  compensated for their testimonials.
                </p>
              </div>
              <div class="container__nav">
                <p>
                  By clicking 'Accept' you are agreeing to our terms and
                  conditions.
                </p>
                <a
                  class="button cursor-pointer bg-yellow"
                  onClick={() => {
                    setCheck();
                    close();
                  }}
                >
                  Accept
                </a>
              </div>
            </section>
          </main>
        </div>
      )}
    </Popup>
  );
};
export default PopupModal;
