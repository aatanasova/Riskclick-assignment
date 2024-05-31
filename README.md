## Risklick

Your task is to display the data in a table format on a web page.
Intervention Table: The table should display interventions data.

## Technologies Used

    - React Query: For handling server state and caching.
    - Next.js 14: As the React framework for server-side rendering.
    - React: For building the user interface.
    - Typescript: Used for defining types and interfaces.
    - Tailwind CSS: For styling the components and pages.

## Getting Started

To get a local copy up and running, follow these steps:

**Clone the repository:**

```sh
git clone https://github.com/your-username/your-repository.git
```

**Install dependencies:**

```sh
npm install
```

**Start the development server:**
npm run dev

    Open http://localhost:3000 in your browser.

## Implementation Strategy

**Overview**

This project is designed to handle intervention data with functionalities for search, sort, and filter. The implementation leverages modern web development technologies and best practices to create a robust, maintainable, and efficient application. For handling server state and caching, the project uses React Query.

# Approach

**Simulating API Calls:**
To simulate API calls, I used a local JSON file (/data/data.json). This approach allowed me to develop and test the application without relying on a live backend service. The fetch request to the local JSON file mimics a real API call.

```sh
try {
  const response = await fetch(`/data/data.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  // Continue processing the response
} catch (error) {
  console.error(error);
}
```

**React Query:**

    React Query was used to manage server state and caching. It simplifies data fetching, caching, synchronization, and other server-state-related activities, making the code cleaner and more maintainable.
    Example of a React Query setup:

```sh
import { useQuery } from 'react-query';

const fetchInterventions = async () => {
  const response = await fetch('/data/data.json');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

const { data, error, isLoading } = useQuery('interventions', fetchInterventions);
```

**Context API:**

    The Context API was used to manage the intervention data globally. This approach allows for a centralized state management solution, making it easier to share data across components without prop drilling.
    Example of setting up Context:

```sh
import { createContext, useContext, useState } from 'react';

const InterventionsContext = createContext();

export const InterventionsProvider = ({ children }) => {
  const [interventions, setInterventions] = useState([]);

  return (
    <InterventionsContext.Provider value={{ interventions, setInterventions }}>
      {children}
    </InterventionsContext.Provider>
  );
};

export const useInterventions = () => useContext(InterventionsContext);
```

**Search, Sort, and Filter:**

    I implemented search, sort, and filter functionalities to enhance the user experience and data interaction. These functions were applied to the intervention data stored in the Context API.
    Example of a search function:

```sh
const searchInterventions = (searchTerm) => {
  return interventions.filter(intervention =>
    intervention.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};
```

**Reusable Components:**

    I created reusable components to keep the codebase DRY (Don't Repeat Yourself) and maintainable. Components such as Column, Button, Input and Pagination were designed to be easily reused throughout the application.
    Example of a reusable component:

**Tailwind CSS:**
Tailwind CSS was used for styling the components and pages. Although I encountered a problem with the Tailwind CSS configuration that prevented me from using `@apply`, I managed to style the components using inline utility classes.

**Challenges and Solutions**

    Tailwind CSS Configuration:
        Issue: Unable to use `@apply` due to a module not found error.
        Solution: This issue requires further investigation into the Tailwind CSS setup and configuration. For now, I used inline utility classes to style components directly in the JSX.

### Conclusion

This project demonstrates a modern approach to handling intervention data in a React application using Next.js, React Query, and the Context API. By leveraging Next.js for server-side rendering, the application ensures optimal performance and SEO benefits. The use of React Query simplifies server state management and caching, while the Context API provides a centralized state management solution. The implementation of search, sort, and filter functionalities, along with reusable components, makes the project scalable and maintainable. Despite the challenges with Tailwind CSS configuration, the project successfully incorporates these technologies to create an efficient and robust application.
