import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
     const [state, handleSubmit] = useForm("xleqwqae");
  if (state.succeeded) {
      return <p>Submitted Successfully!</p>;
  }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full md:w-[500px]'>
        <label htmlFor="email" className='text-secondary'>
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='rounded-[0.2rem] py-2 px-3 focus:outline-secondary font-medium text-black'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor='message' className='text-secondary' >Message</label>
        <textarea
        className='h-[150px] rounded-[0.2rem] py-2 px-3 focus:outline-secondary font-medium text-black'
          id="message"
          name="message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" className='self-start bg-secondary py-2 px-4 rounded-[0.2rem]' disabled={state.submitting}>
          Submit
        </button>
      </form>
    )
}

export default ContactForm
