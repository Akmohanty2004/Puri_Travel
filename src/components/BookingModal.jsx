import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  Printer, 
  Download, 
  ChevronRight, 
  ArrowLeft,
  Clock,
  Phone,
  Mail,
  User,
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ packageData, onClose, onBookingSuccess }) {
  const [step, setStep] = useState(1);
  const [travelDate, setTravelDate] = useState('2026-11-20');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Traveler info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pujaGotra, setPujaGotra] = useState('');
  const [wheelchairRequired, setWheelchairRequired] = useState(false);

  // Add-ons
  const [addOns, setAddOns] = useState({
    mahaprasadBento: true,
    vipPriestEscort: false,
    stationPickup: true,
  });

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const basePricePerPerson = packageData?.price || 4999;
  const travelersCount = adults + children;
  const baseTotal = basePricePerPerson * adults + (basePricePerPerson * 0.6 * children);

  const addOnPrices = {
    mahaprasadBento: 350 * travelersCount,
    vipPriestEscort: 600,
    stationPickup: 450,
  };

  const addOnsTotal =
    (addOns.mahaprasadBento ? addOnPrices.mahaprasadBento : 0) +
    (addOns.vipPriestEscort ? addOnPrices.vipPriestEscort : 0) +
    (addOns.stationPickup ? addOnPrices.stationPickup : 0);

  const grandTotal = Math.round(baseTotal + addOnsTotal);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 2) {
      if (!fullName.trim() || !phone.trim()) {
        alert('Please enter your full name and contact phone number.');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleConfirmPayment = () => {
    const bookingId = `PT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      bookingId,
      bookingDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      packageTitle: packageData.title,
      packageCategory: packageData.categoryLabel || 'Puri Pilgrimage',
      travelDate,
      adults,
      children,
      travelersCount,
      fullName,
      phone,
      email: email || 'Not specified',
      pujaGotra: pujaGotra || 'Kashyapa (General Archana)',
      wheelchairRequired,
      addOns: Object.keys(addOns).filter((k) => addOns[k]),
      totalAmount: grandTotal,
      paymentMethod,
      paymentStatus: 'Paid & Confirmed',
      status: 'Confirmed'
    };

    // Save to localStorage
    const saved = JSON.parse(localStorage.getItem('puri_bookings') || '[]');
    saved.unshift(newBooking);
    localStorage.setItem('puri_bookings', JSON.stringify(saved));

    setConfirmedBooking(newBooking);
    setStep(5);

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff7b00', '#0077b6', '#00b4d8', '#ffc107', '#25D366']
      });
    } catch (err) {
      // Confetti fallback
    }

    if (onBookingSuccess) {
      onBookingSuccess(newBooking);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-sky-100 flex flex-col relative">
        {/* Header Strip */}
        <div className="bg-gradient-to-r from-[#071e3d] via-[#0077b6] to-[#ff7b00] p-5 text-white flex items-center justify-between sticky top-0 z-20">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                {step === 5 ? 'Booking Confirmed' : `Step ${step} of 4: Booking Checkout`}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-white mt-0.5 truncate max-w-md">
              {packageData?.title || 'Puri Experience'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wizard Steps Content */}
        <div className="p-6 flex-grow">
          {/* STEP 1: Schedule & Guests */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-[#ff7b00] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#071e3d] uppercase tracking-wider">Instant Confirmation</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Select your travel date and group size. Free cancellation up to 24 hours prior to arrival.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  Choose Preferred Travel Date
                </label>
                <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <Calendar className="w-5 h-5 text-[#0077b6]" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-transparent font-bold text-sm text-slate-800 focus:outline-none cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Adults (12+ yrs)
                  </label>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <Users className="w-5 h-5 text-[#0077b6]" />
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-transparent font-bold text-sm text-slate-800 focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                        <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    Children (Under 12)
                  </label>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <Users className="w-5 h-5 text-amber-500" />
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full bg-transparent font-bold text-sm text-slate-800 focus:outline-none"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>{num} Child{num > 1 ? 'ren' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Preview */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Estimated Base Package:</span>
                  <div className="text-xl font-black text-[#071e3d]">₹{baseTotal.toLocaleString('en-IN')}</div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Best Price Guarantee
                </span>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#ff6f00] hover:to-[#ffa200] shadow-md shadow-sky-700/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Continue to Devotee Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Devotee & Contact Information */}
          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4 animate-in fade-in duration-200">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Full Name (Lead Pilgrim / Traveler) *
                </label>
                <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <User className="w-4 h-4 text-[#0077b6]" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ashish Kumar Jena"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Mobile Phone (WhatsApp) *
                  </label>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="flex items-center space-x-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
                    <Mail className="w-4 h-4 text-sky-600" />
                    <input
                      type="email"
                      placeholder="traveler@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-sm font-bold text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Temple Puja Gotra / Family Name (Optional for Archana)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kashyapa, Bharadwaja, or Family Name"
                  value={pujaGotra}
                  onChange={(e) => setPujaGotra(e.target.value)}
                  className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 focus:outline-none"
                />
              </div>

              {/* Senior / Wheelchair check */}
              <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <HeartHandshake className="w-4 h-4 text-[#ff7b00]" />
                  <span className="text-xs font-semibold text-amber-900">
                    Require Senior Citizen Wheelchair Assistance?
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={wheelchairRequired}
                  onChange={(e) => setWheelchairRequired(e.target.checked)}
                  className="w-4 h-4 accent-[#ff7b00] cursor-pointer"
                />
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-2xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0077b6] to-[#0096c7] hover:from-[#ff6f00] hover:to-[#ffa200] shadow-md transition-all cursor-pointer"
                >
                  Next: Add-on Perks
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Add-on Perks */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Select Recommended Puri Add-ons
              </h4>

              {/* Add-on 1: Mahaprasad Bento */}
              <div
                onClick={() => setAddOns({ ...addOns, mahaprasadBento: !addOns.mahaprasadBento })}
                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  addOns.mahaprasadBento ? 'border-[#ff7b00] bg-orange-50/50' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-slate-800">
                    Authentic Mahaprasad Bento Box (Abhada)
                  </div>
                  <div className="text-xs text-slate-500">Fresh earthen-pot cooked feast from Anand Bazar</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#ff7b00]">+₹{addOnPrices.mahaprasadBento}</span>
                  <input
                    type="checkbox"
                    checked={addOns.mahaprasadBento}
                    readOnly
                    className="ml-2 accent-[#ff7b00]"
                  />
                </div>
              </div>

              {/* Add-on 2: VIP Sevayat Priest */}
              <div
                onClick={() => setAddOns({ ...addOns, vipPriestEscort: !addOns.vipPriestEscort })}
                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  addOns.vipPriestEscort ? 'border-[#0077b6] bg-sky-50/50' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-slate-800">
                    Personal Sevayat Priest Escort
                  </div>
                  <div className="text-xs text-slate-500">Dedicated guidance right to Ratnavedi Holy Sanctum</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#0077b6]">+₹{addOnPrices.vipPriestEscort}</span>
                  <input
                    type="checkbox"
                    checked={addOns.vipPriestEscort}
                    readOnly
                    className="ml-2 accent-[#0077b6]"
                  />
                </div>
              </div>

              {/* Add-on 3: AC Station Pickup */}
              <div
                onClick={() => setAddOns({ ...addOns, stationPickup: !addOns.stationPickup })}
                className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                  addOns.stationPickup ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="text-sm font-bold text-slate-800">
                    Puri Railway Station AC Chauffeur Pickup
                  </div>
                  <div className="text-xs text-slate-500">Clean sanitized cab with luggage assistance</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600">+₹{addOnPrices.stationPickup}</span>
                  <input
                    type="checkbox"
                    checked={addOns.stationPickup}
                    readOnly
                    className="ml-2 accent-emerald-600"
                  />
                </div>
              </div>

              {/* Total Grand Calculation */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Grand Total with Add-ons:</span>
                  <div className="text-2xl font-black text-amber-300">₹{grandTotal.toLocaleString('en-IN')}</div>
                </div>
                <span className="text-xs text-emerald-400 font-semibold">Taxes & GST Included</span>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 py-3 rounded-2xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="w-2/3 py-3 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff6f00] to-[#ffa200] shadow-md hover:scale-101 transition-all cursor-pointer"
                >
                  Proceed to Payment (₹{grandTotal.toLocaleString('en-IN')})
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Payment Simulation */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Payment Method
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>256-bit Bank Grade Encrypted</span>
                </span>
              </div>

              {/* Payment Tabs */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'Instant UPI / QR', icon: QrCode },
                  { id: 'card', label: 'Debit / Card', icon: CreditCard },
                  { id: 'advance', label: 'Pay 20% Advance', icon: Sparkles }
                ].map((m) => {
                  const Icon = m.icon;
                  const isSelected = paymentMethod === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`p-3 rounded-xl text-center text-xs font-bold transition-all border cursor-pointer ${
                        isSelected
                          ? 'border-[#0077b6] bg-sky-50 text-[#0077b6] shadow-sm'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-4 h-4 mx-auto mb-1" />
                      <span>{m.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* UPI QR Display */}
              {paymentMethod === 'upi' && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="w-36 h-36 mx-auto bg-white p-2 rounded-2xl shadow-inner border border-slate-200 flex flex-col items-center justify-center">
                    <QrCode className="w-24 h-24 text-slate-800" />
                    <span className="text-[10px] font-bold text-[#0077b6] mt-1">UPI: puritravel@icici</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Scan using Google Pay, PhonePe, Paytm, or BHIM UPI
                  </p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <input
                    type="text"
                    placeholder="Card Number: 4532 •••• •••• 8921"
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                    defaultValue="4532 8920 1204 8921"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                      defaultValue="08/29"
                    />
                    <input
                      type="password"
                      placeholder="CVV"
                      className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium"
                      defaultValue="724"
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'advance' && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  <strong>Pay ₹{Math.round(grandTotal * 0.2).toLocaleString('en-IN')} today</strong> to lock in the reservation. Balance ₹{Math.round(grandTotal * 0.8).toLocaleString('en-IN')} can be paid directly upon arrival in Puri.
                </div>
              )}

              <div className="p-3 rounded-xl bg-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600">Payable Amount:</span>
                <span className="text-base font-black text-[#071e3d]">
                  ₹{paymentMethod === 'advance' ? Math.round(grandTotal * 0.2).toLocaleString('en-IN') : grandTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-1/3 py-3 rounded-2xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200"
                >
                  Back
                </button>
                <button
                  onClick={handleConfirmPayment}
                  className="w-2/3 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-lg shadow-emerald-500/25 cursor-pointer"
                >
                  Pay & Confirm Booking Now
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: Booking Confirmation Pass */}
          {step === 5 && confirmedBooking && (
            <div className="space-y-5 animate-in zoom-in-95 duration-300">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#071e3d]">
                  Jai Jagannath! Booking Confirmed
                </h3>
                <p className="text-xs text-slate-500">
                  Your electronic travel boarding pass is ready and saved.
                </p>
              </div>

              {/* Printable Boarding Pass Card */}
              <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-[#071e3d] text-white rounded-3xl p-5 shadow-xl border border-sky-800 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                      Official E-Boarding Pass
                    </span>
                    <h4 className="text-sm font-black text-white">{confirmedBooking.packageTitle}</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500 text-white">
                    {confirmedBooking.bookingId}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Lead Devotee:</span>
                    <strong className="text-white text-xs">{confirmedBooking.fullName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Travel Date:</span>
                    <strong className="text-amber-300 text-xs">{confirmedBooking.travelDate}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Devotees:</span>
                    <strong className="text-white text-xs">{confirmedBooking.travelersCount} Person(s)</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Total Paid:</span>
                    <strong className="text-emerald-300 text-xs font-bold">₹{confirmedBooking.totalAmount.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-white/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <QrCode className="w-10 h-10 text-white bg-white/10 p-1 rounded-lg" />
                    <div className="text-[10px] text-slate-300">
                      Show at Singhadwara or Resort desk
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-200 bg-white/10 px-2 py-1 rounded-lg">
                    Sevayat Assigned
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={handlePrint}
                  className="w-1/2 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Ticket</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-1/2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0077b6] hover:bg-[#ff7b00] transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Done & Close</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
