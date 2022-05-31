module.exports = {
    async redirects() {
      return [
        {
          source: '/admin',
          destination: '/admin/dashboard',
          permanent: true,
        },
      ]
    },
  }