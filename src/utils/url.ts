export const getQueryStringParams = query => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
        const [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value) : '';
        return params;
      }, {}
      )
    : {};
};