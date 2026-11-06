import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Send, CheckCircle, Sparkles, MessageSquare, MapPin, Download, FileText, ExternalLink } from 'lucide-react';
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
    // Construct mailto link as direct action option
    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.serviceType} - ${formData.fullName}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nService: ${formData.serviceType}\nLanguage: ${formData.language}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#F6F1E8] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#C5A46D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8DED0] border border-[#C5A46D]/30 text-[#352820] text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Start Your Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#352820] tracking-tight font-sans uppercase">
            Let's Bring Your Project to Life
          </h2>
          <p className="text-base sm:text-lg text-[#352820]/80 font-light leading-relaxed">
            "Looking for a professional voice-over artist, dubbing artist or AI content creator? Let's discuss your project."
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Profiles */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-sm space-y-6">
            
            <div>
              <h3 className="text-2xl font-bold text-[#352820] uppercase tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs font-bold text-[#C5A46D] mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-[#352820]/75 mt-2 font-light leading-relaxed">
                Available for international voiceover recording, synchronized dubbing projects, and AI video production.
              </p>
            </div>

            {/* Direct Contact Buttons List */}
            <div className="space-y-3 pt-2">
              
              {/* Email Direct Link */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-4 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] hover:border-[#C5A46D] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#C5A46D]/15 text-[#352820] group-hover:bg-[#C5A46D] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#352820]/60 uppercase block">Direct Email</span>
                    <span className="text-xs sm:text-sm font-bold text-[#352820] group-hover:text-[#C5A46D] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <Send className="w-4 h-4 text-[#C5A46D] opacity-80 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* LinkedIn Direct Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] hover:border-[#C5A46D] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#352820]/10 text-[#352820] group-hover:bg-[#352820] group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#352820]/60 uppercase block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-bold text-[#352820] group-hover:text-[#C5A46D] transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#C5A46D]">Open ↗</span>
              </a>

              {/* Facebook Direct Link */}
              <a
                href={PERSONAL_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] hover:border-[#C5A46D] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-[#352820]/10 text-[#352820] group-hover:bg-[#352820] group-hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#352820]/60 uppercase block">Facebook Page</span>
                    <span className="text-xs sm:text-sm font-bold text-[#352820] group-hover:text-[#C5A46D] transition-colors">
                      Follow on Facebook
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#C5A46D]">Open ↗</span>
              </a>

            </div>

            {/* CTA & Resume Buttons */}
            <div className="pt-4 border-t border-[#E8DED0] space-y-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#352820] hover:bg-[#271D17] shadow-md text-center transition-colors flex items-center justify-center space-x-2 border border-[#C5A46D]/30"
              >
                <Mail className="w-4 h-4 text-[#C5A46D]" />
                <span>Email Me Directly</span>
              </a>

              {/* Resume Card in Contact */}
              <div className="p-4 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#C5A46D]" />
                    <span className="text-xs font-bold text-[#352820] uppercase tracking-wider">Ramsha's Official Resume</span>
                  </div>
                  <span className="text-[10px] text-[#352820] bg-white px-2 py-0.5 rounded font-mono border border-[#E8DED0]">
                    PDF Format
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/Ramsha_Urooj_CV.pdf"
                    download="Ramsha_Urooj_CV.pdf"
                    className="flex-1 py-2.5 rounded-lg text-xs font-bold text-white bg-[#C5A46D] hover:bg-[#b8955c] transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download My Resume ↓</span>
                  </a>
                  <a
                    href="/Ramsha_Urooj_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-lg text-xs font-semibold text-[#352820] hover:text-[#C5A46D] bg-white border border-[#E8DED0] hover:border-[#C5A46D] transition-colors flex items-center space-x-1"
                    title="View Ramsha's uploaded PDF in browser"
                  >
                    <span>View Resume ↗</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E8DED0] shadow-sm">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#352820]">Send a Direct Project Inquiry</h3>
              <p className="text-xs text-[#352820]/75 mt-1">Fill out your project specifications to receive a quick turnaround quote.</p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#F6F1E8] border border-[#C5A46D]/40 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#C5A46D] mx-auto" />
                <h4 className="text-lg font-bold text-[#352820]">Inquiry Prepared!</h4>
                <p className="text-xs text-[#352820]/80">
                  Your default email client has been launched with your project details. If it did not open automatically, please click below:
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry from Portfolio&body=${encodeURIComponent(formData.details)}`}
                  className="inline-block px-5 py-2.5 bg-[#352820] hover:bg-[#271D17] text-white text-xs font-bold rounded-xl shadow-md border border-[#C5A46D]/30"
                >
                  Send Email Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#352820] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs text-[#352820] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#352820] block mb-1">Your Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., sarah@productionstudio.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs text-[#352820] focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#352820] block mb-1">Service Required</label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs text-[#352820] focus:outline-none focus:border-[#C5A46D]"
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
                    <label className="text-xs font-bold text-[#352820] block mb-1">Language / Accent</label>
                    <select
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs text-[#352820] focus:outline-none focus:border-[#C5A46D]"
                    >
                      <option value="Urdu">Urdu</option>
                      <option value="English">English</option>
                      <option value="American Accent">American English Accent</option>
                      <option value="Multilingual">Multilingual / Multiple Languages</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#352820] block mb-1">Project Details / Script / Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Describe your project, script length, tone requirements, or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1E8] border border-[#E8DED0] text-xs text-[#352820] focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-[#352820] hover:bg-[#271D17] border border-[#C5A46D]/30 shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-[#C5A46D]" />
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
