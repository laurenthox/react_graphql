import React from 'react';

import { Query } from 'react-apollo';

export default ({ children, ...props }) => {
  return <Query { ...props }>
    {({ loading, error, data }) => {
      if (loading) {
        return null
      }
      if (error) {
        return `Error ${ error }`
      }
      return children(data)
    }}
  </Query>
};