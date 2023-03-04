// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var getProjectId = (doc) => {
  return doc._raw.flattenedPath.split("/").at(-1);
};
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    imagesPath: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: getProjectId
    },
    _id: {
      type: "string",
      resolve: getProjectId
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Project]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JD3TXC6J.mjs.map
