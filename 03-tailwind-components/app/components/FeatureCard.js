// Reusable feature card component
// Pass in icon, title, and description as props

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <div className="text-5xl mb-4">{icon}</div>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}