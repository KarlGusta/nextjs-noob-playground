// Pricing card component
// Reusable for Free, Pro, Enterprise plans

export default function PricingCard({ 
  name, 
  price, 
  features, 
  isPopular = false,
  buttonText = "Get Started"
}) {
  return (
    <div className={`card bg-base-100 shadow-xl ${isPopular ? 'border-2 border-primary' : ''}`}>
      {isPopular && (
        <div className="badge badge-primary absolute -top-3 left-1/2 -translate-x-1/2">
          POPULAR
        </div>
      )}
      
      <div className="card-body">
        <h2 className="card-title justify-center text-2xl">{name}</h2>
        
        <div className="text-center my-4">
          <span className="text-5xl font-bold">${price}</span>
          <span className="text-base-content/60">/month</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-success">✓</span> {feature}
            </li>
          ))}
        </ul>
        
        <div className="card-actions justify-center">
          <button className={`btn ${isPopular ? 'btn-primary' : 'btn-outline'} btn-block`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}