import ContactForm from "./ContactForm"

function Footer() {
    return (
        <footer className="px-9 flex flex-col justify-center items-center">
            <h2 className="text-center text-[1.5rem] sm:text-[2.5rem] font-semibold text-secondary">
                Get in Touch
            </h2>
            <ContactForm />
            <p className="text-[0.9rem] w-full text-center mt-16 mb-4">
                Copyright &copy; {new Date().getFullYear()}. Made and Designed by Caleb Odo
            </p>
        </footer>
    )
}

export default Footer
