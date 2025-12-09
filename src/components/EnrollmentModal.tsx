import { useState } from "react";
import { useRazorpay, type RazorpayOrderOptions } from "react-razorpay";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default ({ isOpen, onClose }: EnrollmentModalProps) => {
  const { Razorpay } = useRazorpay();
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    phone: "",
    email: "",
    institute: "",
    locationName: "",
    pincode: "",
    stream: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const student = await fetch("https://api.jaleifoundation.com/landing/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          fatherName: formData.fatherName,
          locationName: formData.locationName,
          pincode: formData.pincode,
          collegeName: formData.institute,
          studyStream: formData.stream,
          email: formData.email,
          phoneNumber: formData.phone,
        }),
      });

      const studentData = await student.json();

      const order = await fetch("https://api.jaleifoundation.com/landing/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId: studentData.data.id,
        }),
      });

      const orderData = await order.json();

      if (orderData.message != "Student has already paid") {
        const options: RazorpayOrderOptions = {
          key: import.meta.env.VITE_RAZORPAY_KEY,
          amount: 45000,
          currency: "INR",
          name: studentData.data.fullName,
          order_id: orderData.order_id,
          handler: async (response) => {
            await fetch("https://api.jaleifoundation.com/landing/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            setIsSubmitted(true);
          },

          prefill: {
            email: studentData.data.email,
          },
        };

        const instance = new Razorpay(options);
        instance.open();
      } else {
        setIsPaid(true);
        setIsSubmitted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-[700px] w-full  overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {isSubmitted ? (
          <div className="p-6 text-center">
            <div className="mb-4">
              <svg
                className="w-16 h-16 mx-auto text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Success!</h2>
            <p className="text-gray-600">{`Your have ${
              isPaid ? "already paid" : "successfully paid."
            } `}</p>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Enroll Now</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-2xl"
                aria-label="Close modal"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name/ पूरा नाम*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                  placeholder="Eg. Ram Chandan"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="fatherName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Father's Name/ पिता का नाम*
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  required
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                  placeholder="Eg. Vijay Chandan"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number / फ़ोन नंबर*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                  placeholder="Eg. 9812345678"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address / ईमेल पता*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                  placeholder="Eg. your.email@example.com"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="institute"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  College Name / कॉलेज का नाम*
                </label>
                <input
                  id="institute"
                  name="institute"
                  type="text"
                  required
                  value={formData.institute}
                  onChange={handleChange}
                  placeholder="Eg. Patna University"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                />
              </div>
              <div
                className="flex [&>div]:flex-1 gap-x-4 flex-col sm:flex-row
              "
              >
                <div className="mb-4">
                  <label
                    htmlFor="locationName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    City - Village Name / शहर - गाँव का नाम*
                  </label>
                  <input
                    id="locationName"
                    name="locationName"
                    type="text"
                    required
                    value={formData.locationName}
                    onChange={handleChange}
                    placeholder="Eg. Patna"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pincode / पिन कोड*
                  </label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    onKeyDown={(e) => {
                      if (e.key != "Backspace" && !/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Eg. 800013"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="stream"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  College Stream / कॉलेज का स्ट्रीम*
                </label>
                <input
                  id="stream"
                  name="stream"
                  type="text"
                  required
                  value={formData.stream}
                  onChange={handleChange}
                  placeholder="Eg. BE CSE"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7BA884]"
                />
              </div>

              <div className="flex gap-3 ">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-[#7BA884] text-white rounded-md hover:bg-[#6a9774] transition-colors font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
