```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('some-url', { signal });
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      console.log('Cleanup function executed');
      controller.abort(); // Abort the fetch request
    };
  }, []);

  return (
    <div>
      {/* ... render data ... */}
    </div>
  );
};

export default MyComponent;
```