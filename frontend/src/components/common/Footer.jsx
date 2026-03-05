import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
Github,
Linkedin,
Twitter,
Mail,
Phone,
MapPin,
ArrowUp,
MessageSquare
} from "lucide-react";

export default function Footer() {

const scrollToTop = () =>
window.scrollTo({top:0,behavior:"smooth"});

return (

<footer className="bg-black text-gray-400 relative border-t border-white/10">

<div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

{/* Brand */}
<div className="md:col-span-2">

<h2 className="text-3xl font-bold text-white mb-3">
Healvance <span className="text-blue-500">AI</span>
</h2>

<p className="max-w-md leading-relaxed text-gray-400">
Building intelligent digital solutions powered by AI,
automation, and modern cloud technologies.
</p>

{/* Social */}
<div className="flex gap-4 mt-6">

<a
href="https://github.com/AmitGiri1281"
target="_blank"
rel="noopener noreferrer"
className="hover:text-white transition"
>
<Github />
</a>

<a
href="https://www.linkedin.com/in/amitgiri8/"
target="_blank"
rel="noopener noreferrer"
className="hover:text-white transition"
>
<Linkedin />
</a>

<a
href="#"
target="_blank"
rel="noopener noreferrer"
className="hover:text-white transition"
>
<Twitter />
</a>

</div>

</div>

{/* Quick Links */}
<div>

<h4 className="text-white font-semibold mb-4">
Quick Links
</h4>

<ul className="space-y-2">

<li>
<Link to="/" className="hover:text-white transition">
Home
</Link>
</li>

<li>
<Link to="/about" className="hover:text-white transition">
About
</Link>
</li>

<li>
<Link to="/portfolio" className="hover:text-white transition">
Portfolio
</Link>
</li>

<li>
<Link to="/contact" className="hover:text-white transition">
Contact
</Link>
</li>

</ul>

</div>

{/* Contact */}
<div>

<h4 className="text-white font-semibold mb-4">
Contact
</h4>

<ul className="space-y-3 text-sm">

<li className="flex items-center gap-2">
<MapPin size={16}/>
Jaunpur UP, India
</li>

<li className="flex items-center gap-2">

<Phone size={16}/>

<a
href="tel:+919935344361"
className="hover:text-white"
>
+91 9935344361
</a>

</li>

<li className="flex items-center gap-2">

<Mail size={16}/>

<a
href="mailto:healvanceai@gmail.com"
className="hover:text-white"
>
healvanceai@gmail.com
</a>

</li>

</ul>

</div>

</div>

{/* Bottom Bar */}
<div className="border-t border-white/10 py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

<p>
© {new Date().getFullYear()} Healvance AI. All rights reserved.
</p>

<div className="flex gap-5">

<Link to="/privacy" className="hover:text-white">
Privacy
</Link>

<Link to="/terms" className="hover:text-white">
Terms
</Link>

<button
onClick={scrollToTop}
className="flex items-center gap-1 hover:text-white"
>

<ArrowUp size={14}/>
Top

</button>

</div>

</div>

{/* Floating Chat Button */}

<motion.button
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg"
aria-label="Live Chat"
>

<MessageSquare/>

</motion.button>

</footer>

)

}