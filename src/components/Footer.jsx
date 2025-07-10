function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">    
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2025 Shop Hub. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-2">
                    <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                    <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                </ul>
            </div>  
        </footer>
    );
}

export default Footer;