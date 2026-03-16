export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: March 16, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              Welcome to Interior Vision ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our interior design collaboration platform, including our web application and browser extension (collectively, the "Service").
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using the Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
            <p>We collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create an account (email address, password, name)</li>
              <li>Use the Service features</li>
              <li>Contact us for support</li>
              <li>Participate in surveys or provide feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Account and Profile Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email address</li>
              <li>Username or display name</li>
              <li>Profile preferences and settings</li>
              <li>Account authentication credentials</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Project and Design Content</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Interior design projects you create</li>
              <li>Moodboards and visual boards</li>
              <li>Uploaded images and visual content</li>
              <li>Product selections and specifications</li>
              <li>Design notes and annotations</li>
              <li>Project metadata (titles, descriptions, tags)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Visual Search Data</h3>
            <p>When you use our visual search functionality:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Images you upload or provide for search queries</li>
              <li>Visual search results and interactions</li>
              <li>Object detection and identification data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Browser Extension Data</h3>
            <p>When you use our browser extension:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>URLs of websites you visit (only for product and Pinterest board detection)</li>
              <li>Product information from e-commerce sites</li>
              <li>Pinterest board data you choose to save</li>
              <li>Active tab information (only when extension is activated)</li>
              <li>Browser cookies (limited to authentication with our service)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
            <p>We automatically collect certain information when you use the Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Information:</strong> Browser type and version, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, features used, time spent on pages, interaction patterns</li>
              <li><strong>Log Data:</strong> IP address, access times, error logs, referring URLs</li>
              <li><strong>Cookies and Similar Technologies:</strong> Session identifiers, authentication tokens, preference settings</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Service Data</h3>
            <p>We integrate with third-party services that may collect data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pinterest:</strong> When you import Pinterest boards, we access board information you authorize</li>
              <li><strong>AI Services:</strong> Images and prompts submitted to AI features are processed by third-party AI providers</li>
              <li><strong>Authentication:</strong> Login credentials are managed through our secure authentication system</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Service Delivery and Functionality</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain the Service</li>
              <li>Process and store your design projects and moodboards</li>
              <li>Enable visual search and product discovery features</li>
              <li>Facilitate Pinterest board imports</li>
              <li>Authenticate your identity and manage your account</li>
              <li>Enable browser extension functionality</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Service Improvement and Development</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyze usage patterns to improve user experience</li>
              <li>Develop new features and functionality</li>
              <li>Debug and fix technical issues</li>
              <li>Conduct research and analytics to enhance the Service</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Communication</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send service-related notifications and updates</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Provide important information about changes to the Service</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Security and Legal Compliance</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Detect, prevent, and address security issues</li>
              <li>Protect against fraudulent, unauthorized, or illegal activity</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Storage and Security</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Data Storage</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your data is stored securely using Supabase infrastructure</li>
              <li>We use industry-standard encryption for data in transit and at rest</li>
              <li>Project data, images, and user information are stored in secure databases</li>
              <li>We retain your data as long as your account is active or as needed to provide services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Security Measures</h3>
            <p>We implement appropriate technical and organizational security measures to protect your information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit using HTTPS/TLS</li>
              <li>Secure authentication and session management</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Monitoring for unauthorized access or security breaches</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services and AI Processing</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">AI Service Providers</h3>
            <p>We use third-party AI services to provide certain features:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Anthropic (Claude AI):</strong> For natural language processing and content generation</li>
              <li><strong>Google Generative AI:</strong> For AI-powered design assistance</li>
              <li><strong>Replicate:</strong> For image processing and generation</li>
            </ul>
            <p className="mt-4">When you use AI features, your images and prompts are sent to these providers for processing. Please review their respective privacy policies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Anthropic Privacy Policy</a></li>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Privacy Policy</a></li>
              <li><a href="https://replicate.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Replicate Privacy Policy</a></li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Pinterest Integration</h3>
            <p>When you import Pinterest boards:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We access only the boards you explicitly authorize</li>
              <li>We do not access private Pinterest data without your permission</li>
              <li>Pinterest data is subject to <a href="https://policy.pinterest.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Pinterest's Privacy Policy</a></li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Analytics and Monitoring</h3>
            <p>We may use analytics services to understand how the Service is used and to improve functionality.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Browser Extension Privacy</h2>
            <p>Our browser extension respects your privacy:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Limited Scope</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The extension only activates when you explicitly use it</li>
              <li>We do not track your general browsing history</li>
              <li>URL detection is limited to identifying product pages and Pinterest boards</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Permissions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>ActiveTab:</strong> To detect products and Pinterest boards on the current tab</li>
              <li><strong>Storage:</strong> To save your authentication state and preferences locally</li>
              <li><strong>Cookies:</strong> Only to maintain your logged-in session with Interior Vision</li>
              <li><strong>Alarms:</strong> For session management and data synchronization</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">No Background Tracking</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The extension does not track your activity when not in use</li>
              <li>We do not collect or store browsing history</li>
              <li>Product detection only occurs when you activate the extension popup</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Sharing and Disclosure</h2>
            <p className="font-semibold">We do not sell your personal information.</p>
            <p className="mt-4">We may share your information in the following circumstances:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">With Your Consent</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>When you explicitly authorize us to share information</li>
              <li>When you import or export data to third-party services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Service Providers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Third-party vendors who provide services on our behalf (hosting, AI processing, infrastructure)</li>
              <li>These providers are contractually obligated to protect your information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Legal Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>When required by law, subpoena, or court order</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>To investigate potential violations of our terms of service</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Business Transfers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>In connection with a merger, acquisition, or sale of assets</li>
              <li>Your information may be transferred to the new entity</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Aggregated or De-identified Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may share aggregated or anonymized data that cannot identify you personally</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights and Choices</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Access and Control</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Update your profile and settings at any time</li>
              <li><strong>Project Data:</strong> Create, edit, and delete your projects and moodboards</li>
              <li><strong>Data Export:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Account Deletion:</strong> Delete your account and associated data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Communication Preferences</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Opt out of promotional communications (service notifications may still be sent)</li>
              <li>Manage email preferences in your account settings</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Browser Extension Controls</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disable or uninstall the browser extension at any time</li>
              <li>Revoke extension permissions through your browser settings</li>
              <li>Clear locally stored extension data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Management</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most browsers allow you to refuse cookies or alert you when cookies are being sent</li>
              <li>Note that disabling cookies may affect Service functionality</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Do Not Track</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We currently do not respond to "Do Not Track" browser signals</li>
              <li>We do not track users across third-party websites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">International Data Transfers</h2>
            <p>
              The Service is operated from the United States. If you are located outside the United States, please be aware that information we collect will be transferred to, processed, and stored in the United States. By using the Service, you consent to this transfer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
            <p>
              The Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">California Privacy Rights (CCPA)</h2>
            <p>If you are a California resident, you have specific rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Know:</strong> Request information about data we collect, use, and share</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell data)</li>
              <li><strong>Right to Non-Discrimination:</strong> Equal service regardless of privacy choices</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us using the information below.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">European Privacy Rights (GDPR)</h2>
            <p>If you are in the European Economic Area (EEA), you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Restriction:</strong> Request limited processing of your data</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Object:</strong> Object to processing of your data</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us using the information below.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Retention</h2>
            <p>We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide the Service and maintain your account</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Fulfill the purposes outlined in this Privacy Policy</li>
            </ul>
            <p className="mt-4">
              When you delete your account, we will delete or anonymize your personal information within a reasonable timeframe, except where we are legally required to retain certain information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Posting the updated Privacy Policy with a new "Last Updated" date</li>
              <li>Sending an email notification to your registered email address</li>
              <li>Displaying a prominent notice within the Service</li>
            </ul>
            <p className="mt-4">
              Your continued use of the Service after changes become effective constitutes acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p><strong>Email:</strong> [Your Contact Email]</p>
              <p><strong>Address:</strong> [Your Business Address]</p>
              <p><strong>Website:</strong> [Your Website URL]</p>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              For privacy-related inquiries, please allow up to 30 days for a response.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Additional Information</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">Security Incidents</h3>
            <p>
              In the event of a data breach that affects your personal information, we will notify you and relevant authorities as required by applicable law.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Deactivation vs. Deletion</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Deactivation:</strong> Temporarily disables your account but retains your data</li>
              <li><strong>Deletion:</strong> Permanently removes your account and data (some data may be retained for legal compliance)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Third-Party Links</h3>
            <p>
              The Service may contain links to third-party websites or services. We are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you access.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-400 italic font-semibold">
              Your privacy is important to us. Thank you for trusting Interior Vision with your interior design projects.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
