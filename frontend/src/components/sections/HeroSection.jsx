// src/components/sections/HeroSection.jsx

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { useRef, useMemo } from "react";

export default function HeroSection() {

const containerRef = useRef(null)

const isTouch =
typeof window !== "undefined" && "ontouchstart" in window

// Mouse tilt
const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)

const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 300 })
const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 300 })

const rotateX = useTransform(mouseYSpring, [-0.5,0.5],["15deg","-15deg"])
const rotateY = useTransform(mouseXSpring, [-0.5,0.5],["-15deg","15deg"])

const handleMouseMove = (e)=>{
if(isTouch || !containerRef.current) return

const rect = containerRef.current.getBoundingClientRect()

const x = (e.clientX - rect.left)/rect.width -0.5
const y = (e.clientY - rect.top)/rect.height -0.5

mouseX.set(x)
mouseY.set(y)
}

const handleMouseLeave = ()=>{
mouseX.set(0)
mouseY.set(0)
}

// floating particles
const particles = useMemo(()=>{

return [...Array(15)].map((_,i)=>({

id:i,
x:Math.random()*100,
y:Math.random()*100,
duration:20+Math.random()*20

}))

},[])

return (

<section
ref={containerRef}
onMouseMove={handleMouseMove}
onMouseLeave={handleMouseLeave}
className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black"
>

{/* glowing background */}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent)]"/>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent)]"/>

{/* grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:60px_60px]" />

{/* particles */}
<div className="absolute inset-0">

{particles.map(p=>(

<motion.div
key={p.id}
className="absolute w-[2px] h-[2px] bg-blue-400/40 rounded-full"
initial={{x:`${p.x}vw`,y:`${p.y}vh`}}
animate={{x:`${Math.random()*100}vw`,y:`${Math.random()*100}vh`}}
transition={{
duration:p.duration,
repeat:Infinity,
ease:"linear"
}}
/>

))}

</div>

{/* floating orb */}
<motion.div
style={!isTouch?{rotateX,rotateY}:{}}
className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"
animate={{scale:[1,1.2,1]}}
transition={{duration:10,repeat:Infinity}}
/>

{/* content */}
<div className="container mx-auto px-6 relative z-10">

<div className="max-w-5xl mx-auto text-center">

{/* badge */}
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur"
>

<Sparkles className="w-4 h-4 text-blue-400"/>

<span className="text-sm text-gray-300">

AI Powered Innovation

</span>

</motion.div>

{/* title */}
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">

<span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">

Healvance AI

</span>

<br/>

<span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">

Smart Healthcare & Digital Solutions

</span>

</h1>

{/* subtitle */}
<p className="text-xl text-gray-300 mb-4">

Transforming healthcare and business with

</p>

<TypeAnimation
sequence={[
"AI Medical Assistants",2000,
"Modern Web Platforms",2000,
"Automation & Cloud Systems",2000,
"Scalable Digital Products",2000
]}
speed={50}
repeat={Infinity}
className="text-2xl md:text-3xl font-semibold text-blue-300"
/>

{/* CTA */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

<Link
to="/contact"
className="group px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center gap-2 hover:scale-105 transition"
>

Schedule Consultation

<ChevronRight className="group-hover:translate-x-1 transition"/>

</Link>

<Link
to="/portfolio"
className="group px-8 py-4 rounded-full text-lg font-semibold border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/10 transition"
>

View Our Work

<ArrowRight className="group-hover:translate-x-1 transition"/>

</Link>

</div>

{/* trust indicators */}
<div className="mt-12 text-sm text-gray-400">

Trusted for AI Solutions • Web Platforms • Automation Systems

</div>

</div>

</div>

</section>

)

}