

const ContactForm = () => {

    // const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    return (
        <form className="w-full">
            {/* onSubmit={handleSubmit(handleAddClass)} */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name <span className="text-red-500">*</span></span>
                </label>
                {/* {...register("name", { required: true })} */}
                <input
                    type="text"
                    placeholder="type your name"
                    name="name"
                    className="text-lg input input-bordered"
                    required
                />
                {/* {errors.name?.type === 'required' && <label className="label">
            <span className="text-error">Name is required !!</span>
        </label>} */}
            </div>
            <br />
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email <span className="text-red-500">*</span></span>
                </label>
                {/* {...register("email", { required: true })} */}
                <input
                    type="text"
                    placeholder="type your email"
                    name="email"
                    className="text-lg input input-bordered"
                    required
                />
                {/* {errors.email?.type === 'required' && <label className="label">
            <span className="text-error">Email is required !!</span>
        </label>} */}
            </div>
            <br />
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                {/* {...register("phone", { required: true })} */}
                <input
                    type="text"
                    placeholder="type your phone"
                    name="phone"
                    className="text-lg input input-bordered"
                />
                {/* {errors.phone?.type === 'required' && <label className="label">
            <span className="text-error">Phone is required !!</span>
        </label>} */}
            </div>
            <br />
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Related Topic <span className="ml-1 text-xs text-yellow-400">( If any )</span></span>
                </label>
                {/* {...register("topic", { required: true })} */}
                <select
                    type="text"
                    placeholder="select class level"
                    name="topic"
                    className="text-lg select select-bordered"
                >
                    <option value="">select topic</option>
                    <option value="Hiring">Hiring</option>
                    <option value="Learning">Learning</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Backend Development">Backend Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Web Apps Development">Web Apps Development</option>
                    <option value="MERN Stack Development">MERN Stack Development</option>
                    <option value="Custom Website Development">Custom Website Development</option>
                </select>
                {/* {errors.topic?.type === 'required' && <label className="label">
            <span className="text-error">Topic is required !!</span>
        </label>} */}
            </div>
            <br />
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Message <span className="text-red-500">*</span></span>
                </label>
                {/* {...register("message", { required: true })} */}
                <textarea
                    type="text"
                    placeholder="type your message"
                    name="message"
                    rows="4"
                    className="text-lg textarea textarea-bordered"
                    required
                />
                {/* {errors.message?.type === 'required' && <label className="label">
            <span className="text-error">Class Description is required !!</span>
        </label>} */}
            </div>
            <br />
            <div className="mt-6 form-control">
                <button className="text-lg btn bg-gradient-to-r from-pink-500 to-yellow-500 hover:to-blue-400 hover:from-green-400" type="submit">Send</button>
            </div>
        </form>
    );
};

export default ContactForm;