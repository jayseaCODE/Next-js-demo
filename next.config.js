// This next.config.js is required to export this NextJS app as a static HTML app
module.exports = {
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      };
    }
  };