// src/pages/case-studies/[id].jsx
import { useParams } from 'react-router-dom'
import { portfolioItems } from '../../data/portfolioItems'

export default function CaseStudy() {
  const { id } = useParams()
  const caseStudy = portfolioItems.find(item => item.id === parseInt(id))

  if (!caseStudy) {
    return <div>Case study not found</div>
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600">{caseStudy.description}</p>
          </div>
          
          <div className="mb-12">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title} 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          
          <div className="prose max-w-none">
            <h2>Project Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus 
              hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut 
              eleifend nibh porttitor.
            </p>
            
            <h2>Challenge</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
              cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <h2>Solution</h2>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
              consequat.
            </p>
            
            <h2>Results</h2>
            <ul>
              <li>Increased conversion rates by 45%</li>
              <li>Reduced server costs by 30%</li>
              <li>Improved user satisfaction scores</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}