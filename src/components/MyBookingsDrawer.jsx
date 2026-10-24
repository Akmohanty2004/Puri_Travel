import React, { useState, useEffect } from 'react';
import { 
  X, 
  Ticket, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Trash2, 
  Printer, 
  MessageCircle, 
  QrCode, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function MyBookingsDrawer({ isOpen, onClose, onExploreClick }) {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    try {
      const data = JSON.parse(localStorage.getItem('puri_bookings') || '[]');
      setBookings(data);
    } catch (e) {
      setBookings([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadBookings();
    }
  }, [isOpen]);

  const handleCancelBooking = (bookingId) => {
    if (window.confirm(`Are you sure you want to cancel booking ${bookingId}? Free cancellation policy applies.`)) {
      const updated = bookings.filter((b) => b.bookingId !== bookingId);
      localStorage.setItem('puri_bookings', JSON.stringify(updated));
      setBookings(updated);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col relative animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-[#071e3d] to-[#0077b6] text-white">
          <div className="flex items-center space-x-2.5">
            <Ticket className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="text-base font-bold text-white">My Saved Bookings</h3>
              <p className="text-xs text-sky-100">
                {bookings.length} {bookings.length === 1 ? 'reservation' : 'reservations'} on this device
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {bookings.length > 0 ? (
            bookings.map((b) => (
              <div
                key={b.bookingId}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                {/* Brand border strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077b6] via-[#00b4d8] to-[#ff7b00]"></div>

                {/* Top strip */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[11px] font-black tracking-wide text-[#0077b6] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-100">
                    {b.bookingId}
                  </span>
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{b.status || 'Confirmed'}</span>
                  </span>
                </div>

                {/* Package Title */}
                <h4 className="mt-2 text-sm font-bold text-[#071e3d] leading-snug">
                  {b.packageTitle}
                </h4>

                {/* Details */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Lead Traveler:</span>
                    <strong className="text-slate-800">{b.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Travel Date:</span>
                    <strong className="text-orange-600">{b.travelDate}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Guests:</span>
                    <span>{b.travelersCount} Devotee(s)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Amount Paid:</span>
                    <strong className="text-emerald-700 font-bold">₹{b.totalAmount.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-3.5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`https://wa.me/919861099880?text=Namaskar%20PuriTravel!%20Need%20assistance%20for%20Booking%20ID%20${b.bookingId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Concierge Support</span>
                  </a>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handlePrint}
                      className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
                      title="Print Pass"
                    >
                      <Printer className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCancelBooking(b.bookingId)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg"
                      title="Cancel Booking"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 px-4">
              <div className="w-16 h-16 rounded-full bg-sky-50 text-[#0077b6] flex items-center justify-center mx-auto mb-4 border border-sky-100">
                <Ticket className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-800">No active bookings yet</h4>
              <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                Once you book a sacred Darshan or coastal vacation package, your passes with QR codes will appear right here.
              </p>
              <button
                onClick={() => {
                  onClose();
                  if (onExploreClick) onExploreClick();
                }}
                className="mt-5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#ff6f00] hover:to-[#ffa200] transition-all shadow-md cursor-pointer"
              >
                Browse Featured Packages
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
          <p className="text-[11px] text-slate-500">
            Need emergency help? Call 24/7 Puri Helpline at <strong>+91 98610 99880</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
