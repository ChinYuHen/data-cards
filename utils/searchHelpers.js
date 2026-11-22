/**
 * Search Helper Functions
 *
 * Pre-built utility functions for filtering data.
 * Students will USE these functions in their TODO implementations.
 */

/**
 * Filter data array by search query
 * @param {Array} data - Array of items to filter
 * @param {string} query - Search query string
 * @returns {Array} Filtered array matching the query
 */
export const filterByQuery = (data, query) => {
  if (!query || query.trim() === '') {
    return data;
  }

  const lowerQuery = query.toLowerCase().trim();

  return data.filter(item => {
    // Search in title
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);

    // Search in category
    const categoryMatch = item.category.toLowerCase().includes(lowerQuery);

    // Search in description
    const descriptionMatch = item.description.toLowerCase().includes(lowerQuery);

    return titleMatch || categoryMatch || descriptionMatch;
  });
};

/**
 * Filter by category
 * @param {Array} data - Array of items to filter
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered array
 */
export const filterByCategory = (data, category) => {
  if (!category || category === 'All') {
    return data;
  }
  return data.filter(item => item.category === category);
};

/**
 * Sort data by price
 * @param {Array} data - Array of items to sort
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted array
 */
export const sortByPrice = (data, order = 'asc') => {
  const sorted = [...data].sort((a, b) => {
    if (order === 'asc') {
      return a.price - b.price;
    }
    return b.price - a.price;
  });
  return sorted;
};

/**
 * Sort data by rating
 * @param {Array} data - Array of items to sort
 * @returns {Array} Sorted array (highest rating first)
 */
export const sortByRating = (data) => {
  return [...data].sort((a, b) => b.rating - a.rating);
};
