import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Send, CheckCircle, MessageSquare, Download, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialService?: string;
  initialEstimate?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService, initialEstimate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: initialService || 'Voice Over',
    language: 'Urdu',
    details: initialEstimate ? `Estimated Scope: ${initialEstimate}` : '',
    budget: '$100 - $500'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.serviceType} - ${formData.fullName}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nService: ${formData.serviceType}\nLanguage: ${formData.language}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#141414] relative overflow-hidden border-t border-[#262626]">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[460px] h-[460px] bg-[#D4AF37]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main CTA Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
            <span>Start Your Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight font-sans uppercase">
            Let's Bring Your Project to Life
          </h2>
          <p className="text-base sm:text-lg text-[#D4D4D4] font-normal leading-relaxed">
            "Looking for a professional voice-over artist, dubbing artist or AI content creator? Let's discuss your project."
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Direct Contact Info & Social Profiles */}
          <div className="lg:col-span-5 bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#2C2C2C] shadow-xl space-y-6">

            <div>
              <h3 className="text-2xl font-bold text-[#FFFFFF] uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#D4AF37] mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 font-normal leading-relaxed">
                Available for international voiceover recording, synchronized dubbing projects, and AI video production.
              </p>
            </div>

            {/* Direct Contact Buttons List */}
            <div className="space-y-3 pt-1">

              {/* Email Direct Link */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-xl bg-[#121212] border border-[#2C2C2C] hover:border-[#D4AF37] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-[#B8B8B8] uppercase block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <Send className="w-4 h-4 text-[#D4AF37] shrink-0 group-hover:translate-x-1 transition-transform" strokeWidth={2.25} />
              </a>

              {/* LinkedIn Direct Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121212] border border-[#2C2C2C] hover:border-[#D4AF37] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#B8B8B8] uppercase block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
              </a>

              {/* Facebook Direct Link */}
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#121212] border border-[#2C2C2C] hover:border-[#D4AF37] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#222222] border border-[#D4AF37]/40 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#111111] transition-colors flex items-center justify-center shrink-0">
                    <Facebook className="w-5 h-5" strokeWidth={2.25} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#B8B8B8] uppercase block">Facebook Page</span>
                    <span className="text-xs sm:text-sm font-bold text-[#FFFFFF] group-hover:text-[#D4AF37] transition-colors">
                      Follow on Facebook
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#D4AF37] shrink-0" strokeWidth={2.25} />
              </a>

            </div>

            {/* CTA & Resume Buttons */}
            <div className="pt-4 border-t border-[#262626] space-y-3.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-3 rounded-xl font-extrabold text-xs sm:text-sm text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] shadow-md text-center transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
                <span>Email Me Directly</span>
              </a>

              {/* Resume Card in Contact — Uses Uploaded Ramsha_Urooj_CV.pdf */}
              <div className="p-4 rounded-xl bg-[#121212] border border-[#2C2C2C] space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.25} />
                    <span className="text-xs font-bold text-[#FFFFFF] uppercase tracking-wider">Ramsha's Official Resume</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#D4AF37] bg-[#202020] px-2.5 py-0.5 rounded font-mono border border-[#D4AF37]/30">
                    PDF Format
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                  <a
                    href="/Ramsha_Urooj_CV.pdf"
                    download="Ramsha_Urooj_CV.pdf"
                    className="flex-1 py-2.5 px-3 rounded-lg text-xs font-extrabold text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] transition-colors flex items-center justify-center space-x-1.5 whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5 text-[#111111]" strokeWidth={2.5} />
                    <span>Download Resume</span>
                  </a>
                  <a
                    href="/Ramsha_Urooj_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg text-xs font-bold text-[#F5F5F5] hover:text-[#D4AF37] bg-[#1E1E1E] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-colors flex items-center justify-center space-x-1.5 whitespace-nowrap"
                    title="View Ramsha's uploaded PDF in browser"
                  >
                    <span>View Resume</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2.25} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#2C2C2C] shadow-xl">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">Send a Direct Project Inquiry</h3>
              <p className="text-xs sm:text-sm text-[#CCCCCC] mt-1">Fill out your project specifications to receive a quick turnaround quote.</p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#121212] border border-[#D4AF37]/45 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#D4AF37] mx-auto" strokeWidth={2.25} />
                <h4 className="text-lg font-bold text-[#FFFFFF]">Inquiry Prepared!</h4>
                <p className="text-xs sm:text-sm text-[#D4D4D4]">
                  Your default email client has been launched with your project details. If it did not open automatically, please click below:
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry from Portfolio&body=${encodeURIComponent(formData.details)}`}
                  className="inline-block px-6 py-2.5 bg-[#D4AF37] hover:bg-[#C9A227] text-[#111111] text-xs font-extrabold rounded-xl shadow-md"
                >
                  Send Email Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#333333] text-sm text-[#FFFFFF] placeholder-[#A8A8A8] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-1.5">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., sarah@productionstudio.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#333333] text-sm text-[#FFFFFF] placeholder-[#A8A8A8] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-1.5">Service Required</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#333333] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Voice Over">Voice Over (Urdu / English / American Accent)</option>
                      <option value="Dubbing & Sync">Dubbing & Lip-Sync Dubbing</option>
                      <option value="Multilingual Team">Multilingual Team Dubbing</option>
                      <option value="AI Content Creation">AI Content Creation / AI Video</option>
                      <option value="Kids & Preschool">Children's & Preschool ECE Content</option>
                      <option value="Brand & UGC">Brand Commercial / UGC Video</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-1.5">Language / Accent</label>
                    <select
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#333333] text-sm text-[#FFFFFF] focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="Urdu">Urdu</option>
                      <option value="English">English</option>
                      <option value="American Accent">American English Accent</option>
                      <option value="Multilingual">Multilingual / Multiple Languages</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-bold text-[#F5F5F5] block mb-1.5">Project Details / Script / Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your project, script length, tone requirements, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-[#121212] border border-[#333333] text-sm text-[#FFFFFF] placeholder-[#A8A8A8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl font-extrabold text-sm text-[#111111] bg-[#D4AF37] hover:bg-[#C9A227] shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#111111]" strokeWidth={2.5} />
                  <span>Hire Ramsha — Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
