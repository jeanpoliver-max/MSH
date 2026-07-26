import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5547984088090?text=Olá! Vim do site da MSH e gostaria de mais informações"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform animate-bounce"
      style={{ animationDuration: '3s' }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
