import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    const date = format(new Date(), 'PPPP');
    return (
            <section className='container'>
                <div className="px-4 py-24 mb-20 text-left bg-gray-50 md:text-center">
                    <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Terms & Conditions</h1>
                    <p className="text-base text-gray-500 md:text-lg">Last updated: {date}</p>
                </div>
                <div className="px-4 pb-20 mx-auto prose">
                    <h2 className="text-2xl font-semibold mt-6" id="1legalnotices">1. Legal Notices</h2>

                    <p>We, the Operators of this Website, provide it as a public service to our users.</p>

                    <p>
                        Please carefully review the following basic rules that govern your use of the Website. Please note that your use of the Website constitutes your unconditional agreement to follow and be bound by
                        these Terms and Conditions of Use. If you (the "User") do not agree to them, do not use the Website, provide any materials to the Website or download any materials from them.
                    </p>

                    <p>
                        The Operators reserve the right to update or modify these Terms and Conditions at any time without prior notice to User. Your use of the Website following any such change constitutes your
                        unconditional agreement to follow and be bound by these Terms and Conditions as changed. For this reason, we encourage you to review these Terms and Conditions of Use whenever you use the
                        Website.
                    </p>

                    <p>
                        These Terms and Conditions of Use apply to the use of the Website and do not extend to any linked third party sites. These Terms and Conditions and our Privacy Policy, which are hereby
                        incorporated by reference, contain the entire agreement (the “Agreement”) between you and the Operators with respect to the Website. Any rights not expressly granted herein are reserved.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="2permittedandprohibiteduses">2. Permitted and Prohibited Uses</h2>

                    <p>
                        You may use the the Website for the sole purpose of sharing and exchanging ideas with other Users. You may not use the the Website to violate any applicable local, state, national, or
                        international law, including without limitation any applicable laws relating to antitrust or other illegal trade or business practices, federal and state securities laws, regulations promulgated
                        by the U.S. Securities and Exchange Commission, any rules of any national or other securities exchange, and any U.S. laws, rules, and regulations governing the export and re-export of
                        commodities or technical data.
                    </p>

                    <p>
                        You may not upload or transmit any material that infringes or misappropriates any person's copyright, patent, trademark, or trade secret, or disclose via the the Website any information the
                        disclosure of which would constitute a violation of any confidentiality obligations you may have.
                    </p>

                    <p>
                        You may not upload any viruses, worms, Trojan horses, or other forms of harmful computer code, nor subject the Website's network or servers to unreasonable traffic loads, or otherwise engage in
                        conduct deemed disruptive to the ordinary operation of the Website.
                    </p>

                    <p>
                        You are strictly prohibited from communicating on or through the Website any unlawful, harmful, offensive, threatening, abusive, libelous, harassing, defamatory, vulgar, obscene, profane,
                        hateful, fraudulent, sexually explicit, racially, ethnically, or otherwise objectionable material of any sort, including, but not limited to, any material that encourages conduct that would
                        constitute a criminal offense, give rise to civil liability, or otherwise violate any applicable local, state, national, or international law.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="3usersubmissions">3 User Submissions</h2>

                    <p>
                        The Operators do not want to receive confidential or proprietary information from you through the Website. Any material, information, or other communication you transmit or post
                        ("Contributions") to the Website will be considered non-confidential.
                    </p>

                    <p>All contributions to this site are licensed by you under the MIT License to anyone who wishes to use them, including the Operators.</p>

                    <p>
                        If you work for a company or at a University, it's likely that you're not the copyright holder of anything you make, even in your free time. Before making contributions to this site, get written
                        permission from your employer.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="4userdiscussionlistsandforums">4. User Discussion Lists and Forums</h2>

                    <p>
                        The Operators may, but are not obligated to, monitor or review any areas on the Website where users transmit or post communications or communicate solely with each other, including but not
                        limited to user forums and email lists, and the content of any such communications. The Operators, however, will have no liability related to the content of any such communications, whether or
                        not arising under the laws of copyright, libel, privacy, obscenity, or otherwise. The Operators may edit or remove content on the the Website at their discretion at any time.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="5useofpersonallyidentifiableinformation">5. Use of Personally Identifiable Information</h2>

                    <p>Information submitted to the Website is governed according to the Operators’s current Privacy Policy and the stated license of this website.</p>

                    <p>
                        You agree to provide true, accurate, current, and complete information when registering with the Website. It is your responsibility to maintain and promptly update this account information to
                        keep it true, accurate, current, and complete. If you provides any information that is fraudulent, untrue, inaccurate, incomplete, or not current, or we have reasonable grounds to suspect that
                        such information is fraudulent, untrue, inaccurate, incomplete, or not current, we reserve the right to suspend or terminate your account without notice and to refuse any and all current and
                        future use of the Website.
                    </p>

                    

                    <h2 className="text-2xl font-semibold mt-6" id="6indemnification">6. Indemnification</h2>

                    <p>
                        You agree to defend, indemnify and hold harmless the Operators, agents, vendors or suppliers from and against any and all claims, damages, costs and expenses, including reasonable attorneys'
                        fees, arising from or related to your use or misuse of the Website, including, without limitation, your violation of these Terms and Conditions, the infringement by you, or any other subscriber
                        or user of your account, of any intellectual property right or other right of any person or entity.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="7termination">7. Termination</h2>

                    <p>
                        These Terms and Conditions of Use are effective until terminated by either party. If you no longer agree to be bound by these Terms and Conditions, you must cease use of the Website. If you are
                        dissatisfied with the Website, their content, or any of these terms, conditions, and policies, your sole legal remedy is to discontinue using the Website. The Operators reserve the right to
                        terminate or suspend your access to and use of the Website, or parts of the Website, without notice, if we believe, in our sole discretion, that such use (i) is in violation of any applicable
                        law; (ii) is harmful to our interests or the interests, including intellectual property or other rights, of another person or entity; or (iii) where the Operators have reason to believe that you
                        are in violation of these Terms and Conditions of Use.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="8warrantydisclaimer">8. WARRANTY DISCLAIMER</h2>

                    <p>
                        THE WEBSITE AND ASSOCIATED MATERIALS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, THE OPERATORS DISCLAIM ALL WARRANTIES, EXPRESS OR
                        IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY. THE OPERATORS MAKE NO
                        REPRESENTATIONS OR WARRANTY THAT THE WEBSITE WILL MEET YOUR REQUIREMENTS, OR THAT YOUR USE OF THE WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR FREE; NOR DO THE OPERATORS MAKE ANY
                        REPRESENTATION OR WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE WEBSITE. THE OPERATORS MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE
                        OPERATION OF THE WEBSITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON THE WEBSITE.
                    </p>

                    <p>
                        IN NO EVENT SHALL THE OPERATORS OR ANY OF THEIR AGENTS, VENDORS OR SUPPLIERS BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, BUSINESS
                        INTERRUPTION, LOSS OF INFORMATION) ARISING OUT OF THE USE, MISUSE OF OR INABILITY TO USE THE WEBSITE, EVEN IF THE OPERATORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS DISCLAIMER
                        CONSTITUTES AN ESSENTIAL PART OF THIS AGREEMENT. BECAUSE SOME JURISDICTIONS PROHIBIT THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY
                        NOT APPLY TO YOU.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="9general">9. General</h2>

                    <p>
                        The Website is hosted in the United States. The Operators make no claims that the Content on the Website is appropriate or may be downloaded outside of the United States. Access to the Content
                        may not be legal by certain persons or in certain countries. If you access the Website from outside the United States, you do so at your own risk and are responsible for compliance with the laws
                        of your jurisdiction. The provisions of the UN Convention on Contracts for the International Sale of Goods will not apply to these Terms. A party may give notice to the other party only in
                        writing at that party's principal place of business, attention of that party's principal legal officer, or at such other address or by such other method as the party shall specify in writing.
                        Notice shall be deemed given upon personal delivery or facsimile, or, if sent by certified mail with postage prepaid, 5 business days after the date of mailing, or, if sent by international
                        overnight courier with postage prepaid, 7 business days after the date of mailing. If any provision herein is held to be unenforceable, the remaining provisions will continue in full force
                        without being affected in any way. Further, the parties agree to replace such unenforceable provision with an enforceable provision that most closely approximates the intent and economic effect
                        of the unenforceable provision. Section headings are for reference purposes only and do not define, limit, construe or describe the scope or extent of such section. The failure of the Operators
                        to act with respect to a breach of this Agreement by you or others does not constitute a waiver and shall not limit the Operators' rights with respect to such breach or any subsequent breaches.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="10linkstoothermaterials">10. Links to Other Materials</h2>

                    <p>
                        The Website may contain links to sites owned or operated by independent third parties. These links are provided for your convenience and reference only. We do not control such sites and,
                        therefore, we are not responsible for any content posted on these sites. The fact that the Operators offer such links should not be construed in any way as an endorsement, authorization, or
                        sponsorship of that site, its content or the companies or products referenced therein, and the Operators reserve the right to note its lack of affiliation, sponsorship, or endorsement on the
                        Website. If you decide to access any of the third party sites linked to by the Website, you do this entirely at your own risk. Because some sites employ automated search results or otherwise
                        link you to sites containing information that may be deemed inappropriate or offensive, the Operators cannot be held responsible for the accuracy, copyright compliance, legality, or decency of
                        material contained in third party sites, and you hereby irrevocably waive any claim against us with respect to such sites.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6" id="11notificationofpossiblecopyrightinfringement">11. Notification Of Possible Copyright Infringement</h2>

                    <p>In the event you believe that material or content published on the Website may infringe on your copyright or that of another, please <Link to='/contact' className='link'>Contact Us</Link>.</p>
                </div>
            </section>
    );
};

export default About;