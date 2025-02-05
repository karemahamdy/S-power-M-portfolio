import SecondaryButton from "../../components/SecondaryBtn";

function Contact() {

  return (
    <section className="bg dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mb-10">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary dark:text-white">Contact Us</h2>
      
        <form action="#"  className="space-y-8 m">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-primary  dark:text-gray-300">Full Namel</label>
            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300text-primary  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-primary  dark:text-gray-300">E-mail</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-primary  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-primary  dark:text-gray-400">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-primary  bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <div className="flex items-center justify-center ">
          <SecondaryButton>Submit</SecondaryButton> 
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
