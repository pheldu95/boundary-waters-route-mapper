import { useEffect, useState } from "react";

function App() {
  const [campsites, setCampsites] = useState<Campsite[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/campsites')
    .then(response => response.json())
    .then(data => setCampsites(data));
  }, [])

  return (
    <div>
      <h3>Route Mapper</h3>
      <ul>
        {campsites.map((campsite) => (
          <li key={campsite.id}>{campsite.description}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
