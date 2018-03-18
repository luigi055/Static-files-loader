const { parseQuery } = require("loader-utils");

function staticFilesLoader(source) {
  if (!this.emitFile)
    throw new Error(
      "Static Files Loader\n\nemitFile is required from module system"
    );

  // find the absolute file path
  const context = this.rootContext;

  // Find the absolute file folder
  const path = this.resourcePath;

  // Extract the string file name.
  const url = path.substr(path.indexOf(context) + context.length);

  // Get the query options if exist in this case we need the output query with the desired output file name
  // ?output="fileName"
  const queries = this.resourceQuery || `?output=${url}`;
  // parse the queries and return an object with the queries
  const query = parseQuery(queries);
  this.emitFile(query.output, source);
  return `export default ${JSON.stringify(source)}`;
}

module.exports = staticFilesLoader;
module.exports.raw = true;
