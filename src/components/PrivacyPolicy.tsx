import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to hash if present
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="flex-1 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#C0A030] mb-8 transition-colors duration-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto"
        >
          <h1 className="mb-4 text-[#0A0A0A]">Privacy Policy</h1>
          <p className="text-gray-600 mb-10">Last Updated: November 3, 2025</p>

          <div className="space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At 21 Trucking LLC ("we," "us," or "our"), we are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our services, visit our website, or communicate with us.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Business information (company name, shipping addresses)</li>
                <li>Communication data (messages, inquiries, support requests)</li>
                <li>Technical information (IP address, browser type, device information)</li>
                <li>Usage data (how you interact with our website and services)</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide and maintain our trucking services</li>
                <li>Process and manage shipments</li>
                <li>Communicate with you about services, updates, and technical issues</li>
                <li>Send SMS notifications regarding transportation unit technical issues (with consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* SMS Consent Statement */}
            <section className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C0C0C0]/10 p-8 rounded-3xl border-2 border-[#D4AF37]">
              <h2 className="mb-4 text-[#0A0A0A]">SMS Consent and Phone Number Privacy</h2>
              <p className="text-gray-800 leading-relaxed">
                <strong>Important:</strong> Mobile opt-in, SMS consent, or phone numbers provided for SMS 
                purposes are not shared with any third parties or affiliates.
              </p>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>With service providers who help us operate our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transaction (merger, sale, or acquisition)</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access: Request access to the personal information we hold about you</li>
                <li>Correction: Request correction of inaccurate or incomplete information</li>
                <li>Deletion: Request deletion of your personal information</li>
                <li>Opt-out: Opt-out of marketing communications or SMS messages at any time</li>
                <li>Data Portability: Request a copy of your data in a portable format</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            {/* SMS Terms and Conditions */}
            <section id="sms-terms" className="border-t-4 border-[#D4AF37] pt-10 mt-10">
              <h2 className="mb-8 text-[#0A0A0A]">SMS Terms and Conditions</h2>

              {/* SMS Consent Communication */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">SMS Consent Communication</h3>
                <p className="text-gray-700 leading-relaxed">
                  The information "Phone Numbers" obtained as part of the SMS consent process will not be 
                  shared with third parties for marketing purposes.
                </p>
              </div>

              {/* Types of SMS Communications */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Types of SMS Communications</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you have consented to receive text messages from 21 Trucking LLC, you may receive 
                  messages related to the technical issues of the transportation units.
                </p>
              </div>

              {/* Message Frequency */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Message Frequency</h3>
                <p className="text-gray-700 leading-relaxed">
                  Message frequency may vary depending on the type of communication. For example, you may 
                  receive up to 20 SMS messages per week related to your specification.
                </p>
              </div>

              {/* Potential Fees */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Potential Fees for SMS Messaging</h3>
                <p className="text-gray-700 leading-relaxed">
                  Please note that standard message and data rates may apply, depending on your carrier's 
                  pricing plan. These fees may vary if the message is sent domestically or internationally.
                </p>
              </div>

              {/* Opt-In Method */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Opt-In Method</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You may opt-in to receive SMS messages from 21 Trucking LLC in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Verbally, during a conversation</li>
                  <li>By submitting an online form</li>
                  <li>By filling out a paper form</li>
                </ul>
              </div>

              {/* Opt-Out Method */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Opt-Out Method</h3>
                <p className="text-gray-700 leading-relaxed">
                  You can opt out of receiving SMS messages at any time. To do so, simply reply "STOP" to 
                  any SMS message you receive. Alternatively, you can contact us directly to request removal 
                  from our messaging list.
                </p>
              </div>

              {/* Help */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Help</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get 
                  help directly from us at <a href="mailto:info@21trucking.com" className="text-[#D4AF37] hover:text-[#C0A030] underline transition-colors duration-300">info@21trucking.com</a> or by calling (555) 123-4567.
                </p>
              </div>

              {/* Additional Options */}
              <div className="mb-8">
                <h3 className="mb-3 text-[#0A0A0A]">Additional Options</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you do not wish to receive SMS messages, you can choose not to check the SMS consent 
                  box on our forms.
                </p>
              </div>

              {/* Standard Messaging Disclosures */}
              <div className="bg-[#F5F5F5] p-8 rounded-3xl border-2 border-[#E8E8E8]">
                <h3 className="mb-4 text-[#0A0A0A]">Standard Messaging Disclosures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Message and data rates may apply.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    <span>You can opt out at any time by texting "STOP."</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    <span>For assistance, text "HELP" or visit our <Link to="/privacy-policy" className="text-[#D4AF37] hover:text-[#C0A030] underline transition-colors duration-300">Privacy Policy</Link> and <Link to="/privacy-policy#sms-terms" className="text-[#D4AF37] hover:text-[#C0A030] underline transition-colors duration-300">Terms & Conditions</Link>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Message frequency may vary.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use cookies and similar tracking technologies to enhance your experience on our 
                website. You can control cookies through your browser settings.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="mb-4 text-[#0A0A0A]">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gradient-to-br from-[#D4AF37]/10 to-[#C0C0C0]/10 p-8 rounded-3xl border-2 border-[#D4AF37]">
              <h2 className="mb-6 text-[#0A0A0A]">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or wish to exercise your rights, 
                please contact us:
              </p>
              <div className="space-y-3 text-gray-800">
                <p className="text-[#0A0A0A]">21 Trucking LLC</p>
                <p>Email: <a href="mailto:info@21trucking.com" className="text-[#D4AF37] hover:text-[#C0A030] underline transition-colors duration-300">info@21trucking.com</a></p>
                <p>Phone: <a href="tel:5551234567" className="text-[#D4AF37] hover:text-[#C0A030] underline transition-colors duration-300">(555) 123-4567</a></p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
