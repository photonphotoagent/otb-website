const Footer = () => {
  return (
    <footer className="py-32 bg-stone-50/50 border-t border-stone-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-sm">
            <div className="flex items-center space-x-4 mb-10 group cursor-pointer">
               <div className="w-12 h-12 bg-stone-950 rounded-2xl flex items-center justify-center shadow-2xl transition-all group-hover:rotate-12 group-hover:bg-emerald-900">
                  <span className="text-white font-black text-sm">OTB</span>
               </div>
               <span className="text-3xl font-medium text-stone-900 tracking-tighter">Outside the Box</span>
            </div>
            <p className="text-stone-400 text-lg font-light leading-relaxed mb-10">
              Architecting ethical real estate exits since 2024. We believe in equity, community, and the power of win-win scenarios.
            </p>
            <div className="flex space-x-6">
               <a href="#" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 hover:-translate-y-1 transition-all duration-300">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </a>
               <a href="#" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-stone-900 hover:border-stone-900 hover:-translate-y-1 transition-all duration-300">
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
               </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-900">Pillars</h4>
              <ul className="space-y-4">
                <li><a href="#philosophy" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">The Ethics</a></li>
                <li><a href="#strategy" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Consultation</a></li>
                <li><a href="#scenarios" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Case Studies</a></li>
                <li><a href="#contact" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Partner</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-900">Integrity</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Privacy</a></li>
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Accessibility</a></li>
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Fair Housing</a></li>
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Transparency</a></li>
              </ul>
            </div>
            <div className="space-y-6 hidden sm:block">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-900">Collective</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Careers</a></li>
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Press Kit</a></li>
                <li><a href="#" className="text-stone-500 hover:text-emerald-900 transition-colors font-light">Impact Report</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[9px] text-stone-400 font-black uppercase tracking-[0.5em]">&copy; 2024 Outside the Box Real Estate Capital &bull; All Rights Reserved</p>
          <div className="flex items-center space-x-2 text-[9px] text-stone-400 font-bold uppercase tracking-[0.3em]">
             <span>Designed in Isolation</span>
             <div className="w-1 h-1 bg-emerald-300 rounded-full" />
             <span>Built for the Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
