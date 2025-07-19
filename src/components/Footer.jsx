function Footer() {
    return (
        <footer className="bg-gray-800 text-white flex justify-evenly flex-wrap py-7 px-4 ">    
            <div>
                <p className="text-sm">© 2025 Shop Hub. All rights reserved.</p>
            </div>
            <div>
                <ul className="flex justify-center space-x-4">
                    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                    <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;