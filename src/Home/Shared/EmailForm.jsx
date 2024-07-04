import { useState } from "react";

const EmailForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
            <form
                action="https://formsubmit.co/nusratjahan3657r@gmail.com"
                method="POST"
                className="space-y-4"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Send Message
                </button>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="YOUR_REDIRECT_URL" />
            </form>
        </div>
    );
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_f8og84c', 'template_dgeyfmb', e.target, 'Nusrat')
    //         .then((result) => {
    //             console.log(result.text);
    //             alert('Message sent successfully!');
    //         }, (error) => {
    //             console.log(error.text);
    //             alert('Failed to send the message, please try again.');
    //         });

    //     setFormData({ name: '', email: '', message: '' });
    // };
    // return (
    //     <div className="bg-gray-50 my-5 py-10 px-5 mr-5 md:mr-20 w-full">
    //         <div className="container  ">
    //             <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
    //             <form onSubmit={handleSubmit} className="max-w-md mx-auto">
    //                 <div className="mb-4">
    //                     <label htmlFor="name" className="block text-gray-700">Name</label>
    //                     <input
    //                         type="text"
    //                         name="name"
    //                         id="name"
    //                         value={formData.name}
    //                         onChange={handleChange}
    //                         className="w-full px-3 py-2 border rounded"
    //                         required
    //                     />
    //                 </div>
    //                 <div className="mb-4">
    //                     <label htmlFor="email" className="block text-gray-700">Email</label>
    //                     <input
    //                         type="email"
    //                         name="email"
    //                         id="email"
    //                         value={formData.email}
    //                         onChange={handleChange}
    //                         className="w-full px-3 py-2 border rounded"
    //                         required
    //                     />
    //                 </div>
    //                 <div className="mb-4">
    //                     <label htmlFor="message" className="block text-gray-700">Message</label>
    //                     <textarea
    //                         name="message"
    //                         id="message"
    //                         value={formData.message}
    //                         onChange={handleChange}
    //                         className="w-full px-3 py-2 border rounded"
    //                         rows="4"
    //                         required
    //                     ></textarea>
    //                 </div>
    //                 <div className="text-center">
    //                     <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //                         Send Message
    //                     </button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div>
    // );
};

export default EmailForm;